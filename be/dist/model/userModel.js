"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 创建schema
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt = require("bcryptjs");
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
    role: {
        type: String,
        default: "user", // admin user
    },
});
// 保存前加密密码
userSchema.pre("save", async function () {
    if (!this.isModified("password"))
        return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
// 验证密码方法
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
exports.default = userSchema;
//# sourceMappingURL=userModel.js.map