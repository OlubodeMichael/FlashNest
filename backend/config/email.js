const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465, // true for port 465 (SSL), false for 587 (TLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail({ to, subject, html }) {
  try {
    const info = await transporter.sendMail({
      from: `"FlashNest" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });
    console.log("Email sent ✅:", info.response);
  } catch (err) {
    console.error("Email failed 💥:", err);
  }
}

module.exports = sendEmail;
