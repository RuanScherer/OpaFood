export interface IMessage {
  to: string
  subject: string
  message: string
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>
}