import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {
  private createCustomerUseCase: CreateCustomerUseCase
  
  constructor(
    createCustomerUseCase: CreateCustomerUseCase
  ) {
    this.createCustomerUseCase = createCustomerUseCase
  }
  async handle(request: Request, response: Response):Promise<Response> {
    const { name, email, password } = request.body

    try {
      await this.createCustomerUseCase.execute({
        name,
        email,
        password,
        verified: false,
        token: null,
        resetPasswordToken: null
      })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' })
    }
  }
}