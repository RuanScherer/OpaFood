import { Request, Response } from "express";
import { ResetCustomerPasswordUseCase } from "./ResetCustomerPasswordUseCase";

export class ResetCustomerPasswordController {
  constructor(
    private resetCustomerPasswordUseCase: ResetCustomerPasswordUseCase
  ) {}

  async handle(request: Request, response: Response):Promise<Response> {
    const { email } = request.body

    try {
      await this.resetCustomerPasswordUseCase.execute({ email })

      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' })
    }
  }
}