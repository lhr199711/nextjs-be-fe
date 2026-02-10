// 创建schema
import mongoose from "mongoose";
const bcrypt = require("bcryptjs");

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
  role: {
    type: String,
    default: "user", // admin user
  },
});

// 保存前加密密码
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// 验证密码方法
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default userSchema;
