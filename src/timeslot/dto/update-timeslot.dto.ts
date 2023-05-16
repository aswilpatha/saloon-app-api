/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeslotDto } from './create-timeslot.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTimeslotDto extends PartialType(CreateTimeslotDto) {
    @IsNotEmpty()
    @IsString()
    readonly timeslot_name: string;
    @IsNotEmpty()
    @IsString()
    readonly description: string;
}
