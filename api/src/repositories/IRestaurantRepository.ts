import { Restaurant } from "../entities/Restaurant";

export interface IRestaurantRepository {
  findByEmail(email: string): Promise<Restaurant>
  findByEmailOrDocument(email: string, document: string): Promise<Restaurant>
  findByToken(token: string): Promise<Restaurant>
  save(user: Restaurant): Promise<string>
}