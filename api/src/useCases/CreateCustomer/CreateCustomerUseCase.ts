import { verifyAccountEmailTemplate } from "../../constants";
import { Customer } from "../../entities/Customer";
import { log } from "../../logger";
import { IMailProvider } from "../../providers/IMailProvider";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { ICreateCustomerRequestDTO } from "./CreateCustomerDTO";
import { hash } from 'bcryptjs'

export class CreateCustomerUseCase {
  private customerRepository: ICustomerRepository
  private mailProvider: IMailProvider

  constructor(
    customerRepository: ICustomerRepository,
    mailProvider: IMailProvider
  ) {
    this.customerRepository = customerRepository
    this.mailProvider = mailProvider
  }

  async execute(data: ICreateCustomerRequestDTO) {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Create Customer use case'
    })

    const customerAlreadyExists = await this.customerRepository.findByEmail(data.email)

    if (customerAlreadyExists) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Create Customer use case'
      })
      throw new Error('User already exists.')
    }

    data.password = await hash(data.password, 10)

    const customer = new Customer(data)

    const token = await this.customerRepository.save(customer)

    await this.mailProvider.sendMail({
      to: data.email,
      subject: 'Verificação de Cadastro no OpaFood!',
      message: verifyAccountEmailTemplate({ token, userType: 'CUSTOMER' })
    })

    log({
      type: 'INFO',
      step: 'END',
      message: 'End of Create Customer use case'
    })
  }
}