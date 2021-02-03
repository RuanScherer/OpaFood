import { Request, Response } from "express";
import { v4 } from "uuid";
import { CreateRestaurantUseCase } from "./CreateRestaurantUseCase";

export class CreateRestaurantController {
  constructor(
    private createRestaurantUseCase: CreateRestaurantUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, password, phone, address, document } = request.body

    try {
      await this.createRestaurantUseCase.execute({
        name,
        email,
        password,
        phone,
        address,
        document,
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