import { GMailProvider } from "../../providers/implementations/GMailProvider";
import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";
import { CreateCustomerController } from "./CreateCustomerController";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const mailtrapMailProvider = new GMailProvider()
const mongoCustomerRepository = new MongoCustomerRepository()

const createCustomerUseCase = new CreateCustomerUseCase(
  mongoCustomerRepository,
  mailtrapMailProvider
)

const createCustomerController = new CreateCustomerController(createCustomerUseCase)

export { createCustomerUseCase, createCustomerController }