/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Decimal128 } from 'mongoose';
import { Appointment } from 'src/appointment/entities/appointment.schemas';
import { Customer } from 'src/customer/schemas/customer.schema';

export class CreatePaymentDto {
    @IsNotEmpty()
    invoice_no: string;
    @IsNotEmpty()
    total_amount :string;
    @IsNotEmpty()
    payment_method: string;
    @IsNotEmpty()
    customer: Customer;
    @IsNotEmpty()
    appointment: Appointment;
}

