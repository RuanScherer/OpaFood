import { getMongoManager, MongoEntityManager } from "typeorm";
import { v4 } from "uuid";
import { Customer } from "../../entities/Customer";
import { connect, disconnect } from "../../infrastructure/database/connection";
import { ICustomerRepository } from "../ICustomerRepository";

export class MongoCustomerRepository implements ICustomerRepository {
  public manager: MongoEntityManager

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

  async save(customer: Customer): Promise<string> {
    await connect()
    this.manager = getMongoManager()

    if (!customer.token) customer.token = v4()

    await this.manager.save(customer)
    
    await disconnect()
    return customer.token
  }
}