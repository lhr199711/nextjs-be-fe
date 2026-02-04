var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/list", function (req: any, res: any, next: any) {
  res.send("book list");
});

export default router;
