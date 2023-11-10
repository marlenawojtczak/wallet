import nodemailer from "nodemailer";
import { APP_PASSWORD, APP_USER } from "../config/config.js";

export const sendVerificationEmail = async (
  email,
  verificationToken,
  subject
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: APP_USER,
        pass: APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "noreply@gmail.com",
      replyTo: "naukait123@gmail.com",
      to: email,
      subject: subject,
      html: `<p>Hello, ${email}</p><p>We just need to verify your email address before you can access Wallet App.</p><p>Please click on the link below.</p>
      <a href="https://uwallet.pl/api/auth/verify/${verificationToken}">Verification Link</a>
      <p>Best regards, Clammers Team</p>`,
    });
  } catch (error) {
    console.log("ERROR here - ", error);
    return error;
  }
};
