import { Response } from "express";
import { OpaFoodRequest } from "../../commons/interfaces";
import { GetCustomerProfileDataUseCase } from "./GetCustomerProfileDataUseCase";

export class GetCustomerProfileDataController {
  constructor(
    private getCustomerProfileDataUseCase: GetCustomerProfileDataUseCase
  ) {}

  async handle(request: OpaFoodRequest, response: Response) {
    const { _id } = request.params
    const tokenId = request.userId

    try {
      const customer = await this.getCustomerProfileDataUseCase.execute({
        _id,
        tokenId
      })

      return response.json(customer)
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' })
    }
  }
}