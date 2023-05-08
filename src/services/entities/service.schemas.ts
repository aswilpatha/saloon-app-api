/* eslint-disable prettier/prettier */
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({
    timestamps: true,
  })
export class Service {
    @Prop()
    service_name: string;
  
    @Prop()
    description: string;
  
    @Prop()
    price: string;
  
  
    @Prop()
    image_url: string;
  
  
  }
  
  export const ServiceSchema =SchemaFactory.createForClass(Service)
