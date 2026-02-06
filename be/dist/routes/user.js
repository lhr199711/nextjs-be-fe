"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
const model_1 = require("../model");
const mongoose_1 = __importDefault(require("mongoose"));
const { ObjectId } = mongoose_1.default.Types;
router.post("/register", async function (req, res, next) {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ code: 400, message: "用户名和密码不能为空" });
    }
    try {
        // 检查用户名是否已存在
        const existingUser = await model_1.User.findOne({ name: name });
        if (existingUser) {
            return res.status(409).json({ code: 409, message: "用户名已被注册" });
        }
        // 创建新用户
        const newUser = new model_1.User({ name, password });
        await newUser.save();
        return res.status(200).json({ code: 200, message: "注册成功" });
    }
    catch (error) {
        return res.status(500).json({ code: 500, message: "服务器错误", error });
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map