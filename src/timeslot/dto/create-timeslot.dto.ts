/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTimeslotDto {
    @IsNotEmpty()
    @IsString()
    readonly timeslot_name: string;
    @IsNotEmpty()
    @IsString()
    readonly description: string;
}
