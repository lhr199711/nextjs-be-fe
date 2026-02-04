// 创建schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  nickName: {
    type: String,
  }
})


export default userSchema;