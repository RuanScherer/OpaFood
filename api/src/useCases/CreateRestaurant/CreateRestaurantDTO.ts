import { Address } from "../../entities/Address";

export interface ICreateRestaurantRequestDTO {
  name: string
  email: string
  password: string
  phone: string
  address: Address
  document: string
  verified: boolean
  token: string
}