const express = require("express");
const router = express.Router();

const authentication = require("./auth.js");
const category = require("./category.js");

router.use("/auth", authentication);
router.use("/category", category);

module.exports = router;
