/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionDto } from './create-session.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {
    @IsNotEmpty()
    @IsString()
    readonly session_name: string;
    @IsNotEmpty()
    @IsString()
    readonly description: string;

}
