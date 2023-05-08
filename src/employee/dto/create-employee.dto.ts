/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString()
    readonly first_name: string;
    @IsNotEmpty()
    @IsString()
    readonly last_name: string;
    readonly experience: string;
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly contact_no: string;
    readonly address: string;
}
