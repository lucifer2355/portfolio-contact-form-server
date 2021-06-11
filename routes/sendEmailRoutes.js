const express = require("express");
const { sendEmail } = require("../controller/sendEmailController");

const router = express.Router();

router.post("/sendEmail", sendEmail);

module.exports = router;
