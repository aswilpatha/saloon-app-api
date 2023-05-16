/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserReviewDto } from './create-user-review.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/auth.schemas';
import { Service } from 'src/services/entities/service.schemas';

export class UpdateUserReviewDto extends PartialType(CreateUserReviewDto) {
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


