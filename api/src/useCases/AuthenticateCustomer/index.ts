import { GMailProvider } from "../../providers/implementations/GMailProvider";
import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";
import { AuthenticateCustomerController } from "./AuthenticateCustomerController";
import { AuthenticateCustomerUseCase } from "./AuthenticateCustomerUseCase";

const customerRepository = new MongoCustomerRepository()
const mailProvider = new GMailProvider()

const authenticateCustomerUseCase = new AuthenticateCustomerUseCase(
  customerRepository,
  mailProvider
)

const authenticateCustomerController = new AuthenticateCustomerController(authenticateCustomerUseCase)

export { authenticateCustomerUseCase, authenticateCustomerController}