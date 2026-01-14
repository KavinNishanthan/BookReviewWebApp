"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packges
const joi_1 = __importDefault(require("joi"));
const axios_1 = require("axios");
// Importing models
const review_model_1 = __importDefault(require("../models/review.model"));
// Importing constants
const http_message_constant_1 = __importDefault(require("../constants/http-message.constant"));
/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to handle user Review
 */
const handleUserReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId, userId, userName, userReview } = req.body;
        const reviewValidation = joi_1.default.object({
            bookId: joi_1.default.string().required(),
            userId: joi_1.default.string().required(),
            userName: joi_1.default.string().required(),
            userReview: joi_1.default.string().required()
        });
        const { error } = reviewValidation.validate(req.body);
        if (error) {
            return res.status(axios_1.HttpStatusCode.BadRequest).json({
                status: http_message_constant_1.default.BAD_REQUEST,
                code: axios_1.HttpStatusCode.BadRequest,
                message: error.details[0].message.replace(/"/g, '')
            });
        }
        let existingBook = yield review_model_1.default.findOne({ bookId });
        if (!existingBook) {
            existingBook = yield review_model_1.default.create({
                bookId,
                reviews: [
                    {
                        userId,
                        userName,
                        userReview
                    }
                ]
            });
        }
        else {
            existingBook.reviews.push({
                userId,
                userName,
                userReview
            });
            yield existingBook.save();
        }
        res.status(axios_1.HttpStatusCode.Created).json({
            status: http_message_constant_1.default.CREATED,
            code: axios_1.HttpStatusCode.Created
        });
    }
    catch (err) {
        console.error(err);
        res.status(axios_1.HttpStatusCode.InternalServerError).json({
            status: http_message_constant_1.default.ERROR,
            code: axios_1.HttpStatusCode.InternalServerError,
            message: 'Internal Server Error'
        });
    }
});
/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to FetchReview
 */
const fetchReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const bookIdValidation = joi_1.default.object({
            bookId: joi_1.default.string().required()
        });
        const { error } = bookIdValidation.validate(req.params);
        if (error) {
            return res.status(axios_1.HttpStatusCode.BadRequest).json({
                status: http_message_constant_1.default.BAD_REQUEST,
                code: axios_1.HttpStatusCode.BadRequest,
                message: error.details[0].message.replace(/"/g, '')
            });
        }
        const book = yield review_model_1.default.findOne({ bookId: bookId });
        if (book) {
            const { reviews } = book;
            if (reviews) {
                res.json(reviews);
            }
            else {
                res.json([]);
            }
        }
        else {
            res.json([]);
        }
    }
    catch (err) {
        console.error('Error fetching horror books:', err);
        res.status(axios_1.HttpStatusCode.InternalServerError).json({
            status: http_message_constant_1.default.ERROR,
            code: axios_1.HttpStatusCode.InternalServerError
        });
    }
});
/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-10
 * @description This function is used to Fetch user Review
 */
const fetchUserReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userIdValidation = joi_1.default.object({
            userId: joi_1.default.string().required()
        });
        const { error } = userIdValidation.validate(req.params);
        if (error) {
            return res.status(axios_1.HttpStatusCode.BadRequest).json({
                status: http_message_constant_1.default.BAD_REQUEST,
                code: axios_1.HttpStatusCode.BadRequest,
                message: error.details[0].message.replace(/"/g, '')
            });
        }
        const data = yield review_model_1.default.aggregate([
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
        }
        else {
            res.json([]);
        }
    }
    catch (err) {
        console.error('Error fetching user reviews:', err);
        res.status(axios_1.HttpStatusCode.InternalServerError).json({
            status: http_message_constant_1.default.ERROR,
            code: axios_1.HttpStatusCode.InternalServerError
        });
    }
});
/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-10
 * @description This function is used to Delete user Review
 */
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, bookId } = req.body;
        const userIdValidation = joi_1.default.object({
            userId: joi_1.default.string().required(),
            bookId: joi_1.default.string().required()
        });
        const { error } = userIdValidation.validate({ userId, bookId });
        if (error) {
            return res.status(axios_1.HttpStatusCode.BadRequest).json({
                status: http_message_constant_1.default.BAD_REQUEST,
                code: axios_1.HttpStatusCode.BadRequest,
                message: error.details[0].message.replace(/"/g, '')
            });
        }
        const result = yield review_model_1.default.updateOne({ 'reviews.userId': userId }, { $pull: { reviews: { userId } } });
        if (result.modifiedCount > 0) {
            res.json({
                status: http_message_constant_1.default.SUCCESS,
                code: axios_1.HttpStatusCode.Ok,
                message: 'Review deleted successfully'
            });
        }
        else {
            res.status(axios_1.HttpStatusCode.NotFound).json({
                status: http_message_constant_1.default.NOT_FOUND,
                code: axios_1.HttpStatusCode.NotFound,
                message: 'Review not found for the specified user and book'
            });
        }
    }
    catch (err) {
        console.error('Error deleting user review:', err);
        res.status(axios_1.HttpStatusCode.InternalServerError).json({
            status: http_message_constant_1.default.ERROR,
            code: axios_1.HttpStatusCode.InternalServerError
        });
    }
});
exports.default = {
    handleUserReview,
    fetchReview,
    fetchUserReview,
    deleteReview
};
