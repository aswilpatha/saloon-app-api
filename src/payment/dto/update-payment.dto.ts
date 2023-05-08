/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Decimal128 } from 'mongoose';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';
import { Customer } from 'src/customer/schemas/customer.schema';
import { Appointment } from 'src/appointment/entities/appointment.schemas';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
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
