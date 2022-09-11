/* eslint-disable import/prefer-default-export */
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

/** 消息 */
@Entity()
export class Message {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property()
  createdAt = new Date();

  @Property()
  roomId!: string;

  constructor(roomId: string) {
    this.roomId = roomId;
  }
}
