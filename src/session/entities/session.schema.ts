/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
  })
export class Session {
    @Prop()
    session_name: string;
  
    @Prop()
    description: string;

}

export const SessionSchema =SchemaFactory.createForClass(Session)