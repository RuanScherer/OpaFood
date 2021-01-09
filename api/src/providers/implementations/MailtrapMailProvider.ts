import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: 'opafoodbr@gmail.com',
        pass: 'opafood123'
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    try {
      await this.transporter.sendMail({
        to: message.to,
        from: {
          name: 'OpaFood',
          address: 'opafoodbr@gmail.com'
        },
        subject: message.subject,
        html: message.message
      })
    } catch (err) {
      console.log(err)
    }
  }
}