"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    topic: {
        type: String,
    },
    createdAt: {
        type: String,
        default: Date.now(),
    },
    updatedAt: {
        type: String,
        default: Date.now(),
    },
});
exports.default = bookSchema;
//# sourceMappingURL=bookModel%20copy.js.map