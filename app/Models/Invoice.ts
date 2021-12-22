import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm';
import Auth from 'App/Models/Auth';

export default class Invoice extends BaseModel {

  @belongsTo(() => Auth)
  public user: BelongsTo<typeof Auth>

  @column({ isPrimary: true })
  public id: number

  @column()
  public invoiceName: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
