const express = require("express");
const { sendEmail } = require("../controller/sendEmailController");

const router = express.Router();

router.post("/", sendEmail);

module.exports = router;
