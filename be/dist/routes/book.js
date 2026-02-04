"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/list", function (req, res, next) {
    res.send("book list");
});
exports.default = router;
//# sourceMappingURL=book.js.map