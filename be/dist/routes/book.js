"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
const model_1 = require("../model");
const mongoose_1 = __importDefault(require("mongoose"));
const { ObjectId } = mongoose_1.default.Types;
// 分页查询书籍
router.get("/list", async function (req, res, next) {
    const { current = 1, pageSize = 10, name, author } = req.query;
    const query = {};
    if (name) {
        query.name = { $regex: name, $options: "i" };
    }
    if (author) {
        query.author = { $regex: author, $options: "i" };
    }
    const skip = (parseInt(current) - 1) * parseInt(pageSize);
    const limit = parseInt(pageSize);
    // 查询总数
    const total = await model_1.Book.db.collection("book").countDocuments(query);
    // 查询符合条件的数据
    const list = await model_1.Book.db
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
router.post("/update", async function (req, res, next) {
    if (!req.body?._id) {
        await model_1.Book.db.collection("book").insertOne(req.body);
    }
    else {
        const { _id, ...other } = req.body; // 不能直接把_id带进去更改这个item
        await model_1.Book.db
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
router.get("/detail/:id", async function (req, res, next) {
    const { id } = req.params;
    try {
        const book = await model_1.Book.db
            .collection("book")
            .findOne({ _id: new ObjectId(id) });
        if (!book) {
            return res.status(404).json({ code: 404, message: "未找到对应书籍" });
        }
        return res.status(200).json({
            code: 200,
            data: book,
        });
    }
    catch (error) {
        return res.status(500).json({ code: 500, message: "服务器错误", error });
    }
});
exports.default = router;
//# sourceMappingURL=book.js.map