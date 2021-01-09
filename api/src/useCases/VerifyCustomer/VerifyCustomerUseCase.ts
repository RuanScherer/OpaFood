import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";

export class VerifyCustomerUseCase {
  private customerRepository: MongoCustomerRepository

  constructor(
    customerRepository: MongoCustomerRepository
  ) {
    this.customerRepository = customerRepository
  }

  async execute(token: string) {
    const customer = await this.customerRepository.findByToken(token)

    if (!customer) {
      throw new Error("Invalid token.")
    }

    customer.verified = true
    this.customerRepository.save(customer)
  }
}