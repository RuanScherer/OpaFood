import { log } from "../../logger";
import { IMailProvider } from "../../providers/IMailProvider";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { IAuthenticateCustomerRequestDTO } from "./AuthenticateCustomerDTO";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { newAccessEmailTemplate } from '../../constants'
import { generateToken } from "../../helpers";

interface IAuthenticationResponse {
  token: string
  verified: boolean
}

export class AuthenticateCustomerUseCase {
  constructor(
    private customerRepository: ICustomerRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute({ email, password }: IAuthenticateCustomerRequestDTO): Promise<IAuthenticationResponse> {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Authenticate Customer use case'
    })
    
    const customer = await this.customerRepository.findByEmail(email)

    if (!customer) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Authenticate Customer use case'
      })
      throw new Error('User does not exists.')
    }

    if (!await compare(password, customer.password)) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Authenticate Customer use case'
      })
      throw new Error('User does not exists.')
    }

    await this.mailProvider.sendMail({
      to: customer.email,
      subject: 'Novo acesso em sua conta no OpaFood!',
      message: newAccessEmailTemplate
    })

    const token = generateToken(customer._id, customer.name)

    log({
      type: 'INFO',
      step: 'END',
      message: 'End of Authenticate Customer use case'
    })

    return { token, verified: customer.verified }
  }
}