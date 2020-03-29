import { User } from "../../types/graph";
import nodemailer from "nodemailer";
import {
  WelcomeMessage,
  PasswordResetLink,
  LoginSecret
} from "./Mailtemplates";
import sgTransport from "nodemailer-sendgrid-transport";

const options = {
  service: "SendGrid",
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD
  }
};

export const Mails = {
  async LoginSecreteMail(user: User, ctx: any, Key: string = "") {
    const mailer = nodemailer.createTransport(sgTransport(options));
    const mailOptions = {
      to: user.email,
      from: "naperg@imran-irshad.io",
      subject: "Welcome To My Website",
      html: LoginSecret(user, ctx, Key)
    };
    return mailer.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Message sent: " + info.response);
      }
    });
  },
  async sendWelcomeEmail(user: User, ctx: any, VerificationKey: string = "") {
    const mailer = nodemailer.createTransport(sgTransport(options));

    const mailOptions = {
      to: user.email,
      from: "naperg@imran-irshad.io",
      subject: "Welcome To My Website",
      html: WelcomeMessage(user, ctx, VerificationKey)
    };
    return mailer.sendMail(mailOptions);
  },

  sendForgetPassword(token, user, ctx) {
    const mailer = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 2525,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASS
      }
    });

    var mailOptions = {
      to: user.email,
      from: "naperg@imran-irshad.io",
      subject: "Forget Password - Imran Irshad Portfolio APP",
      html: PasswordResetLink(token, user, ctx)
    };
    mailer.sendMail(mailOptions, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Mail sent to: " + user.email);
      }
    });
  }
};
