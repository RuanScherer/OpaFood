import { GMailProvider } from "../../providers/implementations/GMailProvider"
import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository"
import { UpdateCustomerPasswordController } from "./UpdateCustomerPasswordController"
import { UpdateCustomerPasswordUseCase } from "./UpdateCustomerPasswordUseCase"

const mailProvider = new GMailProvider()
const customerRepository = new MongoCustomerRepository()

const updateCustomerPasswordUseCase = new UpdateCustomerPasswordUseCase(
  customerRepository,
  mailProvider
)

const updateCustomerPasswordController = new UpdateCustomerPasswordController(
  updateCustomerPasswordUseCase
)

export { updateCustomerPasswordUseCase, updateCustomerPasswordController }