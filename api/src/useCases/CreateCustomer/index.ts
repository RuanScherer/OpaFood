import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";
import { CreateCustomerController } from "./CreateCustomerController";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const mongoCustomerRepository = new MongoCustomerRepository()

const createCustomerUseCase = new CreateCustomerUseCase(
  mongoCustomerRepository,
  mailtrapMailProvider
)

const createCustomerController = new CreateCustomerController(createCustomerUseCase)

export { createCustomerUseCase, createCustomerController }