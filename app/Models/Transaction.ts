import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm';
import Auth from 'App/Models/Auth';
export default class Transaction extends BaseModel {
  @belongsTo(() => Auth)
  public user: BelongsTo<typeof Auth>

  @column({ isPrimary: true })
  public id: number

  @column()
  public customerName: string

  @column()
  public amount: number

  @column()
  public description: string

  @column()
  public type: string

  @column()
  user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
