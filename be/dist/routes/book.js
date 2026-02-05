"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
const model_1 = require("../model");
// 分页查询书籍
router.get("/list", async function (req, res, next) {
    if (!req.body?._id) {
        await model_1.Book.db.collection("book").insertOne(req.body);
    }
    return res.status(200).json({
        code: 200,
        data: {
            message: "操作成功",
        },
    });
});
// 创建和更新书籍
router.post("/update", async function (req, res, next) {
    if (!req.body?._id) {
        await model_1.Book.db.collection("book").insertOne(req.body);
    }
    return res.status(200).json({
        code: 200,
        data: {
            message: "操作成功",
        },
    });
});
exports.default = router;
//# sourceMappingURL=book.js.map