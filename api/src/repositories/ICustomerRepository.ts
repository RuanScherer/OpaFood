import { Customer } from "../entities/Customer";

export interface ICustomerRepository {
  findByEmail(email: string): Promise<Customer>
  findByToken(token: string): Promise<Customer>
  save(user: Customer): Promise<string>
}