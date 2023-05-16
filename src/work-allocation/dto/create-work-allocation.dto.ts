/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { Employee } from "src/employee/entities/employee.schema";
import { Service } from "src/services/entities/service.schemas";
import { Session } from "src/session/entities/session.schema";
import { Timeslot } from "src/timeslot/entities/timeslot.schema";



export class CreateWorkAllocationDto {
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
