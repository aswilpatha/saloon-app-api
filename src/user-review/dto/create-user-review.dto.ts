/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/auth.schemas';
import { Service } from 'src/services/entities/service.schemas';
export class CreateUserReviewDto {
    
    @IsString()
    readonly comment: string;
    @IsNotEmpty()
    @IsNumber()
    readonly rate: number;
    @IsNotEmpty()
    @IsString()
    readonly user: User;
    @IsNotEmpty()
    @IsString()
    readonly service: Service;
}
