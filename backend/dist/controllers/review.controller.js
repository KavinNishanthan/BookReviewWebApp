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
exports.default = {
    handleUserReview
};
