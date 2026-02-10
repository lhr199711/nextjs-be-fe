"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const blockTokenSchema = new mongoose_1.default.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    // 关联的用户ID（方便后续批量登出/查询）
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User", // 关联用户表（如有User模型）
    },
    // 过期时间（配置TTL索引，自动删除过期记录）
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }, // 0表示按字段自身时间过期
    },
});
exports.default = blockTokenSchema;
//# sourceMappingURL=blockTokenModel.js.map