/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString ,IsDate} from 'class-validator';
import { Customer } from 'src/customer/schemas/customer.schema';
import { Service } from 'src/services/entities/service.schemas';
import { Status } from '../entities/appointment.schemas';


export class CreateAppointmentDto {
    @IsNotEmpty()
    //@IsDate()
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
    readonly customer: Customer;
    @IsNotEmpty()
    readonly service: Service;

}
