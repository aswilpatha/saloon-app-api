/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
    @IsNotEmpty()
    @IsString()
    service_name: string;
    description: string;
    @IsNotEmpty()
    @IsString()
    price: string;
    image_url: string;
}
