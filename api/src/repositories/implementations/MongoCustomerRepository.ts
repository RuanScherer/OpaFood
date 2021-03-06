import { getMongoManager, MongoEntityManager } from "typeorm";
import { v4 } from "uuid";
import { Customer } from "../../entities/Customer";
import { connect, disconnect } from "../../infrastructure/database/connection";
import { ICustomerRepository } from "../ICustomerRepository";

export class MongoCustomerRepository implements ICustomerRepository {
  public manager: MongoEntityManager

  async findById(_id: string): Promise<Customer> {
    await connect()
    this.manager = getMongoManager()

    const customer = await this.manager.findOne(Customer, _id)

    await disconnect()
    return customer
  }
  
  async findByEmail(email: string): Promise<Customer> {
    await connect()
    this.manager = getMongoManager()

    const customer = await this.manager.findOne(Customer, { email })

    await disconnect()
    return customer
  }

  async findByToken(token: string): Promise<Customer> {
    await connect()
    this.manager = getMongoManager()

    const customer = await this.manager.findOne(Customer, { token })

    await disconnect()
    return customer
  }

  async findByResetPasswordToken(resetPasswordToken: string): Promise<Customer> {
    await connect()
    this.manager = getMongoManager()

    const customer = await this.manager.findOne(Customer, { resetPasswordToken })

    await disconnect()
    return customer
  }

  async create(customer: Customer) : Promise<string> {
    customer.token = this.generateUUID()
    return await this.saveCustomer(customer)
  }

  async save(customer: Customer) : Promise<void> {
    await this.saveCustomer(customer)
  }

  async saveCustomer(customer: Customer): Promise<string> {
    await connect()
    this.manager = getMongoManager()

    await this.manager.save(customer)
    
    await disconnect()
    return customer.token
  }

  generateUUID(): string {
    return v4()
  }

}