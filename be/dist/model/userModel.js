"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 创建schema
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // 用户名唯一
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // 密码最小长度
    },
});
exports.default = userSchema;
//# sourceMappingURL=userModel.js.map