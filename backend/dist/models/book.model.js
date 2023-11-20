"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    bookId: {
        type: String,
        required: true
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true },
    oneLineStory: { type: String, required: true },
    category: { type: String, required: true },
    review: { type: String, resquired: true }
});
exports.default = (0, mongoose_1.model)('books', schema);
