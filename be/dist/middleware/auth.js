"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const whiteList = ["/api/user/login", "/api/user/register"];
const const_1 = require("../util/const");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const model_1 = require("../model");
const authMiddleware = async (req, res, next) => {
    // 白名单接口直接放行
    if (whiteList.includes(req.path)) {
        return next();
    }
    let token;
    // 从请求头提取 Token（格式：Bearer <token>）
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    // 1. 没有 Token → 拒绝访问
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "未授权：请先登录获取 Token",
        });
    }
    try {
        // 2. 验证 Token 有效性
        const decoded = jsonwebtoken_1.default.verify(token, const_1.JWT_SECRET);
        const findBlock = await model_1.BlockToken.findOne({ userId: decoded.id });
        if (findBlock) {
            return res.status(401).json({
                code: 401,
                message: "Token 已过期，请重新登录",
            });
        }
        // 3. 根据 Token 中的用户 ID 查询数据库（验证用户是否存在）
        const user = await model_1.User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(400).json({
                code: 400,
                success: false,
                message: "用户不存在",
            });
        }
        // 4. 将用户信息挂载到 req 对象，后续接口可直接使用
        req.user = user;
        next(); // 验证通过，放行
    }
    catch (err) {
        // 5. Token 异常处理（过期/篡改）
        let message = "未授权：Token 无效";
        if (err.name === "TokenExpiredError") {
            message = "未授权：Token 已过期，请重新登录";
        }
        return res.status(401).json({
            code: 401,
            message,
        });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.js.map