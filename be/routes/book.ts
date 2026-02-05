var express = require("express");
var router = express.Router();
import { Book } from "../model";

// 分页查询书籍
router.get("/list", async function (req: any, res: any, next: any) {
  if (!req.body?._id) {
    await Book.db.collection("book").insertOne(req.body);
  }
  return res.status(200).json({
    code: 200,
    data: {
      message: "操作成功",
    },
  });
});

// 创建和更新书籍
router.post("/update", async function (req: any, res: any, next: any) {
  if (!req.body?._id) {
    await Book.db.collection("book").insertOne(req.body);
  }
  return res.status(200).json({
    code: 200,
    data: {
      message: "操作成功",
    },
  });
});

export default router;
