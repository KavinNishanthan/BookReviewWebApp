"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const express_1 = require("express");
// Importing routes
const auth_route_1 = __importDefault(require("./auth.route"));
const books_route_1 = __importDefault(require("./books.route"));
const reviwe_route_1 = __importDefault(require("./reviwe.route"));
// Defining router
const router = (0, express_1.Router)();
// Non authorization routes
router.use('/auth', auth_route_1.default);
// Authorization routes
router.use('/book', books_route_1.default);
router.use('/review', reviwe_route_1.default);
exports.default = router;
