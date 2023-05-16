/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDto } from './create-appointment.dto';
import { Service } from 'src/services/entities/service.schemas';
import { Customer } from 'src/customer/schemas/customer.schema';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Status } from '../entities/appointment.schemas';
import { User } from 'src/auth/schemas/auth.schemas';
import { Session } from 'src/session/entities/session.schema';
import { Timeslot } from 'src/timeslot/entities/timeslot.schema';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {

    @IsNotEmpty()
    //@IsDate()
    readonly appointment_date : Date;
    @IsNotEmpty()
    readonly session : Session;
    @IsNotEmpty()
    readonly timeslot : Timeslot;
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
