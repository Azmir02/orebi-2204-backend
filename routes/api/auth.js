const express = require("express");
const registrationController = require("../../controller/registrationController");
const loginController = require("../../controller/loginController");
const otpMatch = require("../../controller/otpMatch");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/login", loginController);
router.post("/otpmatch", otpMatch);

module.exports = router;
