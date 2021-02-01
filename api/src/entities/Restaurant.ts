import { Column, Entity } from "typeorm";
import { Address } from "./Address";
import { User } from "./User";

@Entity()
export class Restaurant extends User {
  
  @Column('string', { unique: true })
  public document: string

  @Column(type => Address)
  public address: Address

  @Column("string", { unique: true })
  public phone: string

  constructor(props: Omit<Restaurant, '_id'>, _id?: string) {
    super(props, _id)
  }
}