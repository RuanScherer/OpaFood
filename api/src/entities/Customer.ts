import { Entity } from "typeorm";
import { User } from "./User";

@Entity()
export class Customer extends User {

  constructor(props: Omit<Customer, '_id'>, _id?: string) {
    super(props, _id)
  }
}