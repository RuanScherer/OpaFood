import { GMailProvider } from "../../providers/implementations/GMailProvider";
import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";
import { ResetCustomerPasswordController } from "./ResetCustomerPasswordController";
import { ResetCustomerPasswordUseCase } from "./ResetCustomerPasswordUseCase";

const mailProvider = new GMailProvider()
const customerRepository = new MongoCustomerRepository()

const resetCustomerPasswordUseCase = new ResetCustomerPasswordUseCase(
  customerRepository,
  mailProvider
)

const resetCustomerPasswordController = new ResetCustomerPasswordController(resetCustomerPasswordUseCase)

export { resetCustomerPasswordUseCase, resetCustomerPasswordController }