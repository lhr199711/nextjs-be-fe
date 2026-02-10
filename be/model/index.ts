import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/";

import userSchema from "./userModel";
import bookSchema from "./bookModel";
import blockTokenSchema from "./blockTokenModel";
async function main() {
  await mongoose.connect(uri);
}

main()
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connected to MongoDB failed");
  });

export const User = mongoose.model("User", userSchema);
export const Book = mongoose.model("Book", bookSchema);
export const BlockToken = mongoose.model("BlockToken", blockTokenSchema);
