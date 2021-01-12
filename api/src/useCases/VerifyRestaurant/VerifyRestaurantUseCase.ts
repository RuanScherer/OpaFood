import { log } from "../../logger";
import { MongoRestaurantRepository } from "../../repositories/implementations/MongoRestaurantRepository";

export class VerifyRestaurantUseCase {
  private restaurantRepository: MongoRestaurantRepository

  constructor(
    restaurantRepository: MongoRestaurantRepository
  ) {
    this.restaurantRepository = restaurantRepository
  }

  async execute(token: string) {
    log({
      type: 'INFO',
      step: 'START',
      message: 'Start of Verify Restaurant use case'
    })

    const restaurant = await this.restaurantRepository.findByToken(token)

    if (!restaurant) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Verify Restaurant use case'
      })
      throw new Error("Invalid token.")
    }

    restaurant.verified = true
    this.restaurantRepository.save(restaurant)
    
    log({
      type: 'INFO',
      step: 'END',
      message: 'End of Verify Customer use case'
    })
  }
}