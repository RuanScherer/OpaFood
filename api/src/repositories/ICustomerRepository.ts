import { Customer } from "../entities/Customer";

export interface ICustomerRepository {
  findById(_id: string): Promise<Customer>
  findByEmail(email: string): Promise<Customer>
  findByToken(token: string): Promise<Customer>
  findByResetPasswordToken(resetPasswordToken: string): Promise<Customer>
  save(user: Customer): Promise<string>
}