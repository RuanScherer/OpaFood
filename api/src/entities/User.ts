import { Column, Entity, ObjectIdColumn } from "typeorm"
import { v4 } from "uuid"

@Entity()
export class User {
  
  @ObjectIdColumn()
  public readonly _id: string
  
  @Column("string")
  public name: string
  
  @Column("string", { unique: true })
  public email: string

  @Column("string", { unique: true })
  public phone: string
  
  @Column("string")
  public password: string

  @Column("boolean", { default: false })
  public verified: boolean

  @Column("string", { default: v4() })
  public token: string

  constructor(props: Omit<User, '_id'>, _id?: string) {
    Object.assign(this, props)
  }
}