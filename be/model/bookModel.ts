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
  graphData: {
    type: Object,
    default: () => ({}),
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  updatedAt: {
    type: String,
    default: Date.now(),
  },
});

export default bookSchema;
