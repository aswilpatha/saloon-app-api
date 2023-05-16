/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSessionDto {
    @IsNotEmpty()
    @IsString()
    readonly session_name: string;
    @IsNotEmpty()
    @IsString()
    readonly description: string;
   
}
