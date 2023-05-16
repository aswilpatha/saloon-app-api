/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDto } from './create-appointment.dto';
import { Service } from 'src/services/entities/service.schemas';
import { Customer } from 'src/customer/schemas/customer.schema';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../entities/appointment.schemas';
import { User } from 'src/auth/schemas/auth.schemas';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {

    @IsNotEmpty()
   // @IsDate()
    readonly appointment_date : Date;
    @IsNotEmpty()
    //@IsDate()
    readonly appointment_time : Date;
    @IsNotEmpty()
    @IsString()
    readonly location: string;
    @IsNotEmpty()
    readonly status:Status;
    @IsNotEmpty()
    readonly user: User;
    @IsNotEmpty()
    readonly service: Service;
}
