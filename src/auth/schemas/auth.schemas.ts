/* eslint-disable prettier/prettier */
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import exp from "constants";



@Schema({
    timestamps: true,
  })
export class User{
    @Prop()
    name:string;
    @Prop({unique:[true,'Duplicate email entered..!!!']})
    email:string;
    @Prop()
    password:string;
}

export const UserSchema=SchemaFactory.createForClass(User)