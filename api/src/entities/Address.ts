import { Column, Entity, ObjectIdColumn } from "typeorm";

export class Address {

  @Column('string')
  public city: string

  @Column('string')
  public district: string

  @Column('string')
  public street: string

  @Column('int')
  public number: number

  constructor(props: Address) {
    Object.assign(this, props)
  }
}