import mongoose from "mongoose";

const blockTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  // 关联的用户ID（方便后续批量登出/查询）
  userId: {
    type: mongoose.Schema.Types.ObjectId,
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

export default blockTokenSchema;
