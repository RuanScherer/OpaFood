import { MongoRestaurantRepository } from "../../repositories/implementations/MongoRestaurantRepository";
import { VerifyRestaurantController } from "./VerifyRestaurantController";
import { VerifyRestaurantUseCase } from "./VerifyRestaurantUseCase";

const mongoRestaurantRepository = new MongoRestaurantRepository()
const verifyRestaurantUseCase = new VerifyRestaurantUseCase(mongoRestaurantRepository)

const verifyRestaurantController = new VerifyRestaurantController(verifyRestaurantUseCase)

export { verifyRestaurantUseCase, verifyRestaurantController }