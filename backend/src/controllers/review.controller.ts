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
 * @description This function is used to Fetch user Review
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
      { $unwind: '$reviews' }, // Unwind the reviews array
      { $match: { 'reviews.userId': userId } }, // Match reviews with the given userId
      { $group: { _id: null, reviews: { $push: '$reviews' } } } // Group back into a single array
    ]);

    if (data.length > 0) {
      res.json(data[0].reviews);
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

export default {
  handleUserReview,
  fetchReview,
  fetchUserReview
};