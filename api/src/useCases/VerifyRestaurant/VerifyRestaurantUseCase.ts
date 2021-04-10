import { Restaurant } from "../../entities/Restaurant";
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
    console.log("Opa: ", restaurant)
    if (!restaurant) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Verify Restaurant use case'
      })
      throw new Error("Invalid token.")
    }

    if (restaurant.verified) {
      log({
        type: 'INFO',
        step: 'END',
        message: 'End of Verify Restaurant use case'
      })
      throw new Error("already been verified")
    }

    restaurant.verified = true
    restaurant.token = null
    this.restaurantRepository.save(restaurant)
    
    log({
      type: 'INFO',
      step: 'END',
      message: 'End of Verify Restaurant use case'
    })
  }
}