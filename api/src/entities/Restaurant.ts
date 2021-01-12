import { Column, Entity } from "typeorm";
import { Address } from "./Address";
import { User } from "./User";
import { WorkTime } from "./WorkTIme";

@Entity()
export class Restaurant extends User {
  
  @Column('string', { unique: true })
  public document: string

  @Column(type => Address)
  public address: Address

  constructor(props: Omit<Restaurant, '_id'>, _id?: string) {
    super(props, _id)
  }
}