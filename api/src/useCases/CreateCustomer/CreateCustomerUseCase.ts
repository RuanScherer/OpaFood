import { Customer } from "../../entities/Customer";
import { IMailProvider } from "../../providers/IMailProvider";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { ICreateCustomerRequestDTO } from "./CreateCustomerDTO";

export class CreateCustomerUseCase {
  private customerRepository: ICustomerRepository
  //private mailProvider: IMailProvider

  constructor(
    customerRepository: ICustomerRepository,
    mailProvider: IMailProvider
  ) {
    this.customerRepository = customerRepository
    //this.mailProvider = mailProvider
  }

  async execute(data: ICreateCustomerRequestDTO) {
    const customerAlreadyExists = await this.customerRepository.findByEmail(data.email)

    if (customerAlreadyExists) {
      throw new Error('User already exists.')
    }

    const customer = new Customer(data)

    await this.customerRepository.save(customer)

    /*
    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com'
      },
      subject: 'Seja bem-vindo!',
      message: 'Você já pode fazer login em nossa plataforma.'
    })
    */
  }
}