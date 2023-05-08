/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
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
