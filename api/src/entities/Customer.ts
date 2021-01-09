import { Column, Entity } from "typeorm";
import { User } from "./User";

@Entity()
export class Customer extends User {

  @Column("string", { unique: true })
  public address: string

  constructor(props: Omit<User, '_id'>, _id?: string) {
    super(props, _id)
  }
}