import { User } from "../entities/User";

export interface ICustomerRepository {
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<void>
}