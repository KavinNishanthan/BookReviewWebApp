// Importing packges
import Joi from 'joi';
import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { generateUUID } from '../helpers/uuid.helper';

// Importing models
import bookModel from '../models/book.model';

// Importing constants
import httpStatusConstant from '../constants/http-message.constant';
import responseMessageConstant from '../constants/response-message.constant';

/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to add the book in DB
 */

const handleAddBook = async (req: Request, res: Response) => {
  try {
    const { title, author, imageUrl, oneLineStory, category, review } = req.body;

    const bookValidation = Joi.object({
      title: Joi.string().required(),
      author: Joi.string().required(),
      imageUrl: Joi.string().required(),
      oneLineStory: Joi.string().required(),
      category: Joi.string().required(),
      review: Joi.string().required()
    });

    const { error } = bookValidation.validate(req.body);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    const checkIsUserExists = await bookModel
      .findOne({
        title
      })
      .select('title -_id');

    if (checkIsUserExists) {
      res.status(HttpStatusCode.Conflict).json({
        status: httpStatusConstant.CONFLICT,
        code: HttpStatusCode.Conflict,
        message: responseMessageConstant.BOOK_ALREADY_EXISTS
      });
    } else {
      const generatedBookId = generateUUID();
      await bookModel.create({
        bookId: generatedBookId,
        title,
        author,
        category,
        oneLineStory,
        review,
        imageUrl
      });
      res.status(HttpStatusCode.Created).json({ status: httpStatusConstant.CREATED, code: HttpStatusCode.Created });
    }
  } catch (err: any) {
    res
      .status(HttpStatusCode.InternalServerError)
      .json({ status: httpStatusConstant.ERROR, code: HttpStatusCode.InternalServerError });
  }
};

/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to fetch All the books
 */


const fetchBooks = async (req: Request, res: Response) => {
  try {
    const book = await bookModel.find();
    res.json(book);
  } catch (err: any) {
    console.error('Error fetching books:', err);
    res
      .status(HttpStatusCode.InternalServerError)
      .json({ status: httpStatusConstant.ERROR, code: HttpStatusCode.InternalServerError });
  }
};

/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to fetch a book
 */

const fetchByBookId = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.body;

    const bookIdValidation = Joi.object({
      bookId: Joi.string().required()
    });

    const { error } = bookIdValidation.validate(req.body);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }
    
    const books = await bookModel.find({ bookId:bookId });
    res.json(books);

  } catch (err: any) {
    console.error('Error fetching horror books:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError,
    });
  }
};


/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to fetch the books by Categories
 */

const fetchByCategories = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;

    const categoryValidation = Joi.object({
      category: Joi.string().required()
    });

    const { error } = categoryValidation.validate(req.params);

    if (error) {
      return res.status(HttpStatusCode.BadRequest).json({
        status: httpStatusConstant.BAD_REQUEST,
        code: HttpStatusCode.BadRequest,
        message: error.details[0].message.replace(/"/g, '')
      });
    }

    console.log(category)
    
    const books = await bookModel.find({ category: category });
    res.json(books);

  } catch (err: any) {
    console.error('Error fetching horror books:', err);
    res.status(HttpStatusCode.InternalServerError).json({
      status: httpStatusConstant.ERROR,
      code: HttpStatusCode.InternalServerError,
    });
  }
};




export default {
  handleAddBook,
  fetchBooks,
  fetchByCategories
};
