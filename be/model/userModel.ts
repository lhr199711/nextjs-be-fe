// 创建schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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

export default userSchema;
