"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("../model");
const token_1 = require("../util/token");
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
router.post("/login", async (req, res) => {
    try {
        const { name, password } = req.body;
        // 验证参数
        if (!name || !password) {
            return res
                .status(400)
                .json({ code: 400, success: false, message: "请输入用户名和密码" });
        }
        // 查询用户
        const user = await model_1.User.findOne({ name });
        if (!user) {
            return res
                .status(401)
                .json({ code: 401, success: false, message: "用户名/密码错误" });
        }
        // 验证密码
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res
                .status(401)
                .json({ code: 401, success: false, message: "用户名/密码错误" });
        }
        await model_1.BlockToken.findOneAndDelete({ userId: new ObjectId(user._id) });
        // 登录成功，返回 Token
        return res.status(200).json({
            code: 200,
            token: (0, token_1.generateToken)(user._id + ""),
            user: { id: user._id, name: user.name, role: user.role },
        });
    }
    catch (err) {
        return res.status(500).json({
            code: 500,
            success: false,
            message: "服务器错误",
            error: err.message,
        });
    }
});
router.post("/logout", async (req, res) => {
    // 通过header的token解析出用户id
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            code: 401,
            success: false,
            message: "未授权：请先登录获取 Token",
        });
    }
    const token = authHeader.split(" ")[1];
    let userId;
    try {
        // 如果有专门的jwt变量名则导入或用此
        const decoded = (0, token_1.verifyToken)(token);
        userId = decoded.id;
        if (!userId) {
            return res.status(401).json({
                code: 401,
                success: false,
                message: "未授权：Token 无效",
            });
        }
        else {
            const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24);
            await model_1.BlockToken.create({ token, userId, expiresAt });
            return res.status(200).json({
                code: 200,
                message: "登出成功",
            });
        }
    }
    catch (err) {
        return res.status(401).json({
            code: 401,
            success: false,
            message: "未授权：Token 校验失败",
        });
    }
    // 查询用户
});
exports.default = router;
//# sourceMappingURL=user.js.map