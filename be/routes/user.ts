var express = require("express");
var router = express.Router();
import { User } from "../model";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

router.post("/register", async function (req: any, res: any, next: any) {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ code: 400, message: "用户名和密码不能为空" });
  }
  try {
    // 检查用户名是否已存在
    const existingUser = await User.findOne({ name: name });
    if (existingUser) {
      return res.status(409).json({ code: 409, message: "用户名已被注册" });
    }
    // 创建新用户
    const newUser = new User({ name, password });
    await newUser.save();
    return res.status(200).json({ code: 200, message: "注册成功" });
  } catch (error) {
    return res.status(500).json({ code: 500, message: "服务器错误", error });
  }
});

export default router;
