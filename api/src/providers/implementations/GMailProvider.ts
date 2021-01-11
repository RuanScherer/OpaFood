import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
import { log } from "../../logger";

export class GMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    log({
      type: 'INFO',
      step: 'UNIQUE',
      message: 'Creating GMail transporter'
    })
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
      log({
        type: 'ERROR',
        step: 'UNIQUE',
        message: 'Error while send mail using GMail provider: ' + err
      })
    }
  }
}