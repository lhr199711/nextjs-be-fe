var express = require("express");
var router = express.Router();
import { Book } from "../model";

// 分页查询书籍
router.get("/list", async function (req: any, res: any, next: any) {
  console.log(req.query, "adwawdawdwa");
  const { current = 1, pageSize = 10, name, author } = req.query;
  const query: any = {};
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }
  if (author) {
    query.author = { $regex: author, $options: "i" };
  }

  const skip = (parseInt(current) - 1) * parseInt(pageSize);
  const limit = parseInt(pageSize);

  // 查询总数
  const total = await Book.db.collection("book").countDocuments(query);

  // 查询符合条件的数据
  const list = await Book.db
    .collection("book")
    .find(query)
    .skip(skip)
    .limit(limit)
    .toArray();

  return res.status(200).json({
    code: 200,
    data: {
      list,
      total,
      current: parseInt(current),
      pageSize: parseInt(pageSize),
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
