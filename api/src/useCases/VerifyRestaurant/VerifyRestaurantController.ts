import { Request, Response } from "express";
import { VerifyRestaurantUseCase } from "./VerifyRestaurantUseCase";

export class VerifyRestaurantController {
  private verifyRestaurantUseCase: VerifyRestaurantUseCase

  constructor(
    verifyRestaurantUseCase: VerifyRestaurantUseCase
  ) {
    this.verifyRestaurantUseCase = verifyRestaurantUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query

    try {
      if (!token || typeof(token) !== 'string') return response.status(400).send()

      await this.verifyRestaurantUseCase.execute(token)
      
      response.redirect('http://localhost:3000/validacao-concluida')
      return
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected error.' })
    }
  }
}