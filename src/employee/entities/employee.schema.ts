/* eslint-disable prettier/prettier */
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({
    timestamps: true,
  })
export class Employee {
    @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  experience: string;


  @Prop()
  email: string;

  @Prop()
  contact_no: string;

  @Prop()
  address: string;

}

export const EmployeeSchema =SchemaFactory.createForClass(Employee)
