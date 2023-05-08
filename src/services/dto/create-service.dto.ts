/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServiceDto {
    @IsNotEmpty()
    @IsString()
    service_name: string;
    description: string;
    @IsNotEmpty()
    @IsString()
    price: string;
    image_url: string;
}
