import { log } from "../../logger";
import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";

export class VerifyCustomerUseCase {
  private customerRepository: MongoCustomerRepository

  constructor(
    customerRepository: MongoCustomerRepository
  ) {
    this.customerRepository = customerRepository
  }

  async execute(token: string) {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Verify Customer use case'
    })

    const customer = await this.customerRepository.findByToken(token)

    if (!customer) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Verify Customer use case'
      })
      throw new Error("Invalid token.")
    }

    customer.verified = true
    this.customerRepository.save(customer)
    
    log({
      type: 'INFO',
      step: 'END',
      message: 'End of Verify Customer use case'
    })
  }
}