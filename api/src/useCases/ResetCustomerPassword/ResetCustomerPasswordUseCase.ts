import { v4 } from "uuid";
import { log } from "../../logger";
import { IMailProvider } from "../../providers/IMailProvider";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { ResetCustomerPasswordRequestDTO } from "./ResetCustomerPasswordDTO";
import { resetPasswordEmailTemplate } from "../../constants"

export class ResetCustomerPasswordUseCase {
  endLog = () => log({
    type: 'INFO',
    step: 'END',
    message: 'End of Reset Customer Password use case'
  })

  constructor(
    private customerRepository: ICustomerRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ResetCustomerPasswordRequestDTO) {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Reset Customer Password use case'
    })

    if (!data.email) {
      this.endLog()
      throw new Error("E-mail is required.")
    }

    let customer = await this.customerRepository.findByEmail(data.email)

    if (!customer) {
      this.endLog()
      throw new Error("No account with this e-mail.")
    }

    customer.resetPasswordToken = v4()

    this.customerRepository
      .save(customer)
      .then(() => {
        this.mailProvider.sendMail({
          to: customer.email,
          subject: "Redefinição de senha da sua conta no OpaFood!",
          message: resetPasswordEmailTemplate(customer.resetPasswordToken)
        })
        this.endLog()
      })
      .catch(error => {
        log({
          type: 'ERROR',
          step: 'UNIQUE',
          message: error
        })
        this.endLog()
        throw new Error("Failed to save token for password reset.")
      })
  }
}