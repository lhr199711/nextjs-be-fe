import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  publishAt: {
    type: Number,
  },
  bookNo: {
    type: String,
  },
  cover: {
    type: String,
  },
  stock: {
    type: Number,
  },
  category: {
    type: String,
  },
});

export default bookSchema;
