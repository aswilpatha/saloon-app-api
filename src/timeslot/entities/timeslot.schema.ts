/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
  })
export class Timeslot {
    @Prop()
    timeslot_name: string;
  
    @Prop()
    description: string;

}

export const TimeslotSchema =SchemaFactory.createForClass(Timeslot)