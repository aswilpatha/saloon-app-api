/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class Customer {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop()
  contact_no: string;

  @Prop()
  address: string;
}

export const CustomerSchema =SchemaFactory.createForClass(Customer)
