import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Transaction from 'App/Models/Transaction';
import {
  hasOne,
  HasOne
} from '@ioc:Adonis/Lucid/Orm';

export default class Auth extends BaseModel {

  @hasOne(() => Transaction)
  public profile: HasOne<typeof Transaction>

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
