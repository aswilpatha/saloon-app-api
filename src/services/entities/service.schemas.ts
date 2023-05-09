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
    category:Category;
  
    @Prop()
    description: string;
  
    @Prop()
    price: string;
  
  
    @Prop()
    image_url: string;
  
  
  }
  export enum Category{
  HAIR_CUT='Hair-Cut',
  MAKE_UP='Make-up',
  BEARD='Beard',
  MASSAGE='Massage',
}
  
  export const ServiceSchema =SchemaFactory.createForClass(Service)
