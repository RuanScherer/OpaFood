import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";
import { VerifyCustomerController } from "./VerifyCustomerController";
import { VerifyCustomerUseCase } from "./VerifyCustomerUseCase";

const mongoCustomerRepository = new MongoCustomerRepository()
const verifyCustomerUseCase = new VerifyCustomerUseCase(mongoCustomerRepository)

const verifyCustomerController = new VerifyCustomerController(verifyCustomerUseCase)

export { verifyCustomerUseCase, verifyCustomerController }