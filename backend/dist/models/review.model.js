"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userReview: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});
const schema = new mongoose_1.Schema({
    bookId: { type: String, required: true, unique: true },
    reviews: [ReviewSchema]
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('reviews', schema);
