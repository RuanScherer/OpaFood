import { log } from "../../logger";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";
import { IGetCustomerProfileDataRequestDTO } from "./GetCustomerProfileDataRequestDTO";

export class GetCustomerProfileDataUseCase {
  private endLog = () => log({
    type: 'INFO',
    step: 'END',
    message: 'End of Create Customer use case'
  })

  constructor(
    private customerRepository: ICustomerRepository
  ) {}

  async execute({ _id, tokenId }: IGetCustomerProfileDataRequestDTO) {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Get Customer Profile Data use case'
    })

    if (!_id) {
      this.endLog()
      throw new Error("ID is required.")
    }

    if (_id !== tokenId) {
      this.endLog()
      throw new Error("You don't have permission to request data from other user.")
    }

    const customer = await this.customerRepository.findById(_id)

    delete(customer.password)
    delete(customer.token)
    delete(customer.resetPasswordToken)

    if (!customer) {
      this.endLog()
      throw new Error("Invalid customer ID.")
    }

    this.endLog()
    return customer
  }
}