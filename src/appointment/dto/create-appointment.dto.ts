/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString ,IsDate} from 'class-validator';
import { Customer } from 'src/customer/schemas/customer.schema';
import { Service } from 'src/services/entities/service.schemas';
import { Status } from '../entities/appointment.schemas';
import { User } from 'src/auth/schemas/auth.schemas';
import { Session } from 'src/session/entities/session.schema';
import { Timeslot } from 'src/timeslot/entities/timeslot.schema';


export class CreateAppointmentDto {
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
