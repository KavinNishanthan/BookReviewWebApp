// Importing packges
import Joi from 'joi';
import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';

// Importing models
import reviewModel from '../models/review.model';

// Importing constants
import httpStatusConstant from '../constants/http-message.constant';

/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to handle user Review
 */

const handleUserReview = async (req: Request, res: Response) => {
  try {
    const { bookId, userId, userName, userReview } = req.body;

    const reviewValidation = Joi.object({
      bookId: Joi.string().required(),
      userId: Joi.string().required(),
      userName: Joi.string().required(),
      userReview: Joi.string().required()
    });

    const { error } = reviewValidation.validate(req.body);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    let existingBook = await reviewModel.findOne({ bookId });

    if (!existingBook) {
      existingBook = await reviewModel.create({
        bookId,
        reviews: [
          {
            userId,
            userName,
            userReview
          }
        ]
      });
    } else {
      existingBook.reviews.push({
        userId,
        userName,
        userReview
      });

      await existingBook.save();
    }

    res.status(HttpStatusCode.Created).json({
      status: httpStatusConstant.CREATED,
      code: HttpStatusCode.Created
    });
  } catch (err: any) {
    console.error(err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError,
      message: 'Internal Server Error'
    });
  }
};

/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to FetchReview
 */

const fetchReview = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;

    const bookIdValidation = Joi.object({
      bookId: Joi.string().required()
    });

    const { error } = bookIdValidation.validate(req.params);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    const book = await reviewModel.findOne({ bookId: bookId });
    if (book) {
      const { reviews } = book;
      if (reviews) {
        res.json(reviews);
      } else {
        res.json([]);
      }
    } else {
      res.json([]);
    }
  } catch (err: any) {
    console.error('Error fetching horror books:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError
    });
  }
};

/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-10
 * @description This function is used to Fetch user Review
 */

const fetchUserReview = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const userIdValidation = Joi.object({
      userId: Joi.string().required()
    });

    const { error } = userIdValidation.validate(req.params);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    const data = await reviewModel.aggregate([
      { $unwind: '$reviews' },
      { $match: { 'reviews.userId': userId } },
      {
        $group: {
          _id: {
            bookId: '$bookId',
            userId: '$reviews.userId'
          },
          reviews: { $push: '$reviews' }
        }
      },
      {
        $lookup: {
          from: 'books',
          localField: '_id.bookId',
          foreignField: 'bookId',
          as: 'bookInfo'
        }
      },
      {
        $project: {
          _id: 0,
          bookId: '$_id.bookId',
          userId: '$_id.userId',
          userReview: { $arrayElemAt: ['$reviews.userReview', 0] },
          bookTitle: { $arrayElemAt: ['$bookInfo.title', 0] }
        }
      }
    ]);

    if (data.length > 0) {
      res.json(data);
    } else {
      res.json([]);
    }
  } catch (err: any) {
    console.error('Error fetching user reviews:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError
    });
  }
};


/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-10
 * @description This function is used to Delete user Review
 */

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;

    const userIdValidation = Joi.object({
      userId: Joi.string().required(),
      bookId: Joi.string().required()
    });

    const { error } = userIdValidation.validate({ userId, bookId });

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    const result = await reviewModel.updateOne({ 'reviews.userId': userId }, { $pull: { reviews: { userId } } });

    if (result.modifiedCount > 0) {
      res.json({
        status: httpStatusConstant.SUCCESS,
        code: HttpStatusCode.Ok,
        message: 'Review deleted successfully'
      });
    } else {
      res.status(HttpStatusCode.NotFound).json({
        status: httpStatusConstant.NOT_FOUND,
        code: HttpStatusCode.NotFound,
        message: 'Review not found for the specified user and book'
      });
    }
  } catch (err: any) {
    console.error('Error deleting user review:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError
    });
  }
};

export default {
  handleUserReview,
  fetchReview,
  fetchUserReview,
  deleteReview
};