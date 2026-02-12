var express = require("express");
var router = express.Router();
import { Book } from "../model";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
// 分页查询书籍
router.get("/list", async function (req: any, res: any, next: any) {
  const { current = 1, pageSize = 10, name, topic } = req.query;
  const query: any = {};
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }
  if (topic) {
    query.topic = { $regex: topic, $options: "i" };
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
  } else {
    const { _id, ...other } = req.body; // 不能直接把_id带进去更改这个item
    await Book.db
      .collection("book")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: other });
  }
  return res.status(200).json({
    code: 200,
    data: {
      message: "操作成功",
    },
  });
});

// 根据id查询书籍详情
router.get("/detail/:id", async function (req: any, res: any, next: any) {
  const { id } = req.params;
  try {
    const book = await Book.db
      .collection("book")
      .findOne({ _id: new ObjectId(id) });
    if (!book) {
      return res.status(404).json({ code: 404, message: "未找到对应书籍" });
    }
    return res.status(200).json({
      code: 200,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({ code: 500, message: "服务器错误", error });
  }
});

// 删除书籍
router.delete("/delete/:id", async function (req: any, res: any, next: any) {
  const { id } = req.params;
  try {
    await Book.db.collection("book").deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json({
      code: 200,
      message: "删除成功",
    });
  } catch (error) {
    return res.status(500).json({ code: 500, message: "服务器错误", error });
  }
});

export default router;
