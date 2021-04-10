import { getMongoManager, MongoEntityManager } from "typeorm";
import { v4 } from "uuid";
import { Restaurant } from "../../entities/Restaurant";
import { connect, disconnect } from "../../infrastructure/database/connection";
import { IRestaurantRepository } from "../IRestaurantRepository";

export class MongoRestaurantRepository implements IRestaurantRepository {
  public manager: MongoEntityManager

  async findByEmail(email: string): Promise<Restaurant> {
    await connect()
    this.manager = getMongoManager()

    const restaurant = await this.manager.findOne(Restaurant, { email })

    await disconnect()
    return restaurant
  }

  async findByEmailOrDocument(email: string, document: string): Promise<Restaurant> {
    await connect()
    this.manager = getMongoManager()

    const restaurant = await this.manager.findOne(Restaurant, { 
      where: {
        $or: [
          { email },
          { document }
        ]
      }
    })

    await disconnect()
    return restaurant
  }

  async findByToken(token: string): Promise<Restaurant> {
    await connect()
    this.manager = getMongoManager()

    const restaurant = await this.manager.findOne(Restaurant, { token })

    await disconnect()
    return restaurant
  }

  async create(customer: Restaurant) : Promise<string> {
    customer.token = this.generateUUID()
    return await this.saveCustomer(customer)
  }

  async save(customer: Restaurant) : Promise<void> {
    await this.saveCustomer(customer)
  }

  async saveCustomer(customer: Restaurant): Promise<string> {
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