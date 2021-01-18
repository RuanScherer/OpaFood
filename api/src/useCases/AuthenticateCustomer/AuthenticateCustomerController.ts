import { Request, Response } from "express";
import { AuthenticateCustomerUseCase } from "./AuthenticateCustomerUseCase";

export class AuthenticateCustomerController {
  constructor(
    private authenticateCustomerUseCase: AuthenticateCustomerUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    try {
      const { token, verified } = await this.authenticateCustomerUseCase.execute({
        email,
        password
      })

      return response.json({ token, verified })
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' })
    }
  }
}