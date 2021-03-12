const path = require("path");

const express = require("express");
const rootdir = require("../util/path");
const router = express.Router();

router.get("/about-us", (req, res, next) => {
  res.render("about-us");
});

module.exports = router;
