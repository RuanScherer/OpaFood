import { Request, Response } from "express";
import { VerifyCustomerUseCase } from "./VerifyCustomerUseCase";

export class VerifyCustomerController {
  private verifyCustomerUseCase: VerifyCustomerUseCase

  constructor(
    verifyCustomerUseCase: VerifyCustomerUseCase
  ) {
    this.verifyCustomerUseCase = verifyCustomerUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query

    try {
      if (!token || typeof(token) !== 'string') return response.status(400).send()

      await this.verifyCustomerUseCase.execute(token)
      response.redirect('http://localhost:3000/email-verificado')
      return
    } catch (error) {
      if (error.message == "already been verified") {
        response.redirect('http://localhost:3000/email-ja-verificado')  
      }
      return response.status(400).json({ message: error.message || 'Unexpected error.' })
    }
  }
}