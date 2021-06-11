const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendEmail = () => {
  console.log("send email");
};
