import { Column, Entity, ObjectIdColumn } from "typeorm"

@Entity()
export class User {
  
  @ObjectIdColumn()
  public readonly _id: string
  
  @Column("string")
  public name: string
  
  @Column("string", { unique: true })
  public email: string
  
  @Column("string")
  public password: string

  @Column("boolean", { default: false })
  public verified: boolean

  constructor(props: Omit<User, '_id'>, _id?: string) {
    Object.assign(this, props)
  }
}