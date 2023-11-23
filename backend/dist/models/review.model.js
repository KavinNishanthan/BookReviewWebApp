"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userReview: { type: String, required: true }
});
const schema = new mongoose_1.Schema({
    bookId: { type: String, required: true, unique: true },
    reviews: [ReviewSchema]
});
exports.default = (0, mongoose_1.model)('reviews', schema);
