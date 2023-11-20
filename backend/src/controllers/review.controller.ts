// Importing packges
import Joi from 'joi';
import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { generateUUID } from '../helpers/uuid.helper';

// Importing models
import reviewModel from '../models/review.model';

// Importing constants
import httpStatusConstant from '../constants/http-message.constant';
import responseMessageConstant from '../constants/response-message.constant';

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

export default {
  handleUserReview
};