"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const express_1 = require("express");
// Importing controllers
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
// Defining routers
const router = (0, express_1.Router)();
//Book routes
router.post('/addBook', book_controller_1.default.handleAddBook);
router.get('/fetch-book', book_controller_1.default.fetchBooks);
router.get('/fetch-book/categories/:category', book_controller_1.default.fetchByCategories);
exports.default = router;
