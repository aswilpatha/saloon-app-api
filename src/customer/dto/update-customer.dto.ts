/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";


export class UpdateCustomerDto{
    @IsNotEmpty()
    @IsString()
    readonly first_name: string;
    @IsNotEmpty()
    @IsString()
    readonly last_name: string;
    @IsNotEmpty()
    @IsString()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly contact_no: string;
    @IsString()
    readonly address: string;

}