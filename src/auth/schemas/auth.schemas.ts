/* eslint-disable prettier/prettier */
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import exp from "constants";

export enum Role{
  Admin='admin',
  Customer='customer',
}

@Schema({
    timestamps: true,
  })
export class User{
    @Prop()
    first_name:string;
    @Prop()
    last_name:string;
    @Prop({unique:[true,'Duplicate email entered..!!!']})
    email:string;
    @Prop()
    password:string;
    @Prop()
    gender:string;
    @Prop()
    contact_no: string;
    @Prop()
    address: string;
    @Prop({default:true})
    is_active:boolean;
    @Prop()
    role:Role;

}

export const UserSchema=SchemaFactory.createForClass(User)