"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookTopicSchema = new mongoose_1.default.Schema({
    topic: {
        type: String,
    },
});
exports.default = bookTopicSchema;
//# sourceMappingURL=bookTopicModel.js.map