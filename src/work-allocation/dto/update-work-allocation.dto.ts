/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkAllocationDto } from './create-work-allocation.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Session } from 'src/session/entities/session.schema';
import { Timeslot } from 'src/timeslot/entities/timeslot.schema';
import { Employee } from 'src/employee/entities/employee.schema';
import { Service } from 'src/services/entities/service.schemas';

export class UpdateWorkAllocationDto extends PartialType(CreateWorkAllocationDto) {
    @IsNotEmpty()
    @IsString()
    readonly session: Session;
    @IsNotEmpty()
    @IsString()
    readonly timeSlot: Timeslot;
    @IsNotEmpty()
    @IsString()
    readonly employee: Employee;
    @IsNotEmpty()
    @IsString()
    readonly service: Service;
}
