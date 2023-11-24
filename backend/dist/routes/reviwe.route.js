"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const express_1 = require("express");
// Importing controllers
const review_controller_1 = __importDefault(require("../controllers/review.controller"));
// Defining routers
const router = (0, express_1.Router)();
// Manual auth routes
router.post('/addReview', review_controller_1.default.handleUserReview);
router.get('/fetch-review/:bookId', review_controller_1.default.fetchReview);
router.get('/fetch-review/user/:userId', review_controller_1.default.fetchUserReview);
router.post('/delete-review', review_controller_1.default.deleteReview);
exports.default = router;
