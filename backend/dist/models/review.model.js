"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    bookId: {
        type: String,
        required: true
    },
    userId: { type: String, required: true },
    userReview: { type: String, required: true }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('reviews', schema);
