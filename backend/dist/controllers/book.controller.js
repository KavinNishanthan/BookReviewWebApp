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
const uuid_helper_1 = require("../helpers/uuid.helper");
// Importing models
const book_model_1 = __importDefault(require("../models/book.model"));
// Importing constants
const http_message_constant_1 = __importDefault(require("../constants/http-message.constant"));
const response_message_constant_1 = __importDefault(require("../constants/response-message.constant"));
/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to add the book in DB
 */
const handleAddBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, imageUrl, oneLineStory, category, review } = req.body;
        const bookValidation = joi_1.default.object({
            title: joi_1.default.string().required(),
            author: joi_1.default.string().required(),
            imageUrl: joi_1.default.string().required(),
            oneLineStory: joi_1.default.string().required(),
            category: joi_1.default.string().required(),
            review: joi_1.default.string().required()
        });
        const { error } = bookValidation.validate(req.body);
        if (error) {
            return res.status(axios_1.HttpStatusCode.BadRequest).json({
                status: http_message_constant_1.default.BAD_REQUEST,
                code: axios_1.HttpStatusCode.BadRequest,
                message: error.details[0].message.replace(/"/g, '')
            });
        }
        const checkIsUserExists = yield book_model_1.default
            .findOne({
            title
        })
            .select('title -_id');
        if (checkIsUserExists) {
            res.status(axios_1.HttpStatusCode.Conflict).json({
                status: http_message_constant_1.default.CONFLICT,
                code: axios_1.HttpStatusCode.Conflict,
                message: response_message_constant_1.default.BOOK_ALREADY_EXISTS
            });
        }
        else {
            const generatedBookId = (0, uuid_helper_1.generateUUID)();
            yield book_model_1.default.create({
                bookId: generatedBookId,
                title,
                author,
                category,
                oneLineStory,
                review,
                imageUrl
            });
            res.status(axios_1.HttpStatusCode.Created).json({ status: http_message_constant_1.default.CREATED, code: axios_1.HttpStatusCode.Created });
        }
    }
    catch (err) {
        res
            .status(axios_1.HttpStatusCode.InternalServerError)
            .json({ status: http_message_constant_1.default.ERROR, code: axios_1.HttpStatusCode.InternalServerError });
    }
});
/**
 * @createdBy Kavin Nishanthan
 * @createdAt 2023-11-09
 * @description This function is used to fetch the books
 */
const fetchBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.find();
        res.json(book);
    }
    catch (err) {
        console.error('Error fetching books:', err);
        res
            .status(axios_1.HttpStatusCode.InternalServerError)
            .json({ status: http_message_constant_1.default.ERROR, code: axios_1.HttpStatusCode.InternalServerError });
    }
});
exports.default = {
    handleAddBook,
    fetchBooks
};
