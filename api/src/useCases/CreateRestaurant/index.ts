import { GMailProvider } from "../../providers/implementations/GMailProvider";
import { MongoRestaurantRepository } from "../../repositories/implementations/MongoRestaurantRepository";
import { CreateRestaurantController } from "./CreateRestaurantController";
import { CreateRestaurantUseCase } from "./CreateRestaurantUseCase";
const restaurantRepository = new MongoRestaurantRepository()
const mailProvider = new GMailProvider()

const createRestaurantUseCase = new CreateRestaurantUseCase(
  restaurantRepository,
  mailProvider
)

const createRestaurantController = new CreateRestaurantController(createRestaurantUseCase)

export { createRestaurantController, createRestaurantUseCase }