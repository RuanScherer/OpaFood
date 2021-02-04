import { Request, Response } from "express";
import { UpdateCustomerPasswordUseCase } from "./UpdateCustomerPasswordUseCase";

export class UpdateCustomerPasswordController {
  constructor(
    private updateCustomerPasswordUseCase: UpdateCustomerPasswordUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { password, token } = request.body

    try {
      await this.updateCustomerPasswordUseCase.execute({
        password,
        token
      })

      return response.send()
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' })
    }
  }
}