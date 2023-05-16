/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { Session } from 'inspector';
import mongoose from 'mongoose';
import { Employee } from 'src/employee/entities/employee.schema';
import { Service } from 'src/services/entities/service.schemas';
import { Timeslot } from 'src/timeslot/entities/timeslot.schema';

@Schema({
    timestamps: true,
  })
export class WorkAllocation {
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'Session' })
    session: Session;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'TimeSlot' })
    timeSlot: Timeslot;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'Employee' })
    employee: Employee;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'Service' })
    service: Service;
}

export const WorkAllocationSchema = SchemaFactory.createForClass(WorkAllocation);