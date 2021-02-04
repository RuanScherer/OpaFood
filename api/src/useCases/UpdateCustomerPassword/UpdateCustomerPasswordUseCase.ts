import { hash } from "bcryptjs";
import { log } from "../../logger";
import { IMailProvider } from "../../providers/IMailProvider";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { IUpdateCustomerPasswordRequestDTO } from "./UpdateCustomerPasswordDTO";
import { passwordResetedEmailTemplate } from "../../constants"

export class UpdateCustomerPasswordUseCase {
  endLog = () => log({
    type: 'INFO',
    step: 'END',
    message: 'End of Update Customer Password use case'
  })
  
  constructor(
    private customerRepository: ICustomerRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: IUpdateCustomerPasswordRequestDTO) {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Update Customer Password use case'
    })

    if (!data.password || !data.token) {
      this.endLog()
      throw new Error("Password and token is required.")
    }

    if (data.password.length < 8) {
      this.endLog()
      throw new Error("Password too short.")
    }

    const customer = await this.customerRepository.findByResetPasswordToken(data.token)

    if (!customer) {
      this.endLog()
      throw new Error("Invalid token.")
    }

    customer.password = await hash(data.password, 10)
    customer.resetPasswordToken = null

    await this.customerRepository.save(customer)

    this.mailProvider.sendMail({
      to: customer.email,
      subject: "Alteração de senha na sua conta do OpaFood!",
      message: passwordResetedEmailTemplate
    })

    this.endLog()
  }
}