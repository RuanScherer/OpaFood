import { MongoCustomerRepository } from "../../repositories/implementations/MongoCustomerRepository";
import { GetCustomerProfileDataController } from "./GetCustomerProfileDataController";
import { GetCustomerProfileDataUseCase } from "./GetCustomerProfileDataUseCase";

const customerRepository = new MongoCustomerRepository()

const getCustomerProfileDataUseCase = new GetCustomerProfileDataUseCase(customerRepository)

const getCustomerProfileDataController = new GetCustomerProfileDataController(getCustomerProfileDataUseCase)

export { getCustomerProfileDataUseCase, getCustomerProfileDataController }