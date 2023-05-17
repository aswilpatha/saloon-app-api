/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
import { Timeslot } from './entities/timeslot.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { AppointmentService } from '../appointment/appointment.service';

@Injectable()
export class TimeslotService {
  constructor(
    @InjectModel(Timeslot.name)
    private timeslotModel:mongoose.Model<Timeslot>,
    private appointmentService: AppointmentService
  ){}

  async create(createTimeslotDto: CreateTimeslotDto):Promise<Timeslot> {
    const timeslot=await this.timeslotModel.create(createTimeslotDto)
        return timeslot;
  }


  async findAll():Promise<Timeslot[]> {
    const timeslots=await this.timeslotModel.find()
        return timeslots;
  }

  async findOne(id:string):Promise<Timeslot>{
    const timeslot=await this.timeslotModel.findById(id)
    if(!timeslot){
        throw new NotFoundException('Not a registered timeslots...!!!');
    }
    return timeslot;
}


async unUsedTimeSlots(date: Date, sessionId: string):Promise<any>{
  const appointments = await this.appointmentService.findAll({appointment_date: date, "session._id": {"$eq" : sessionId} });
  const usedSlots = appointments.map(appointment => appointment.timeslot )
  const usedSlotsObjects = JSON.parse(JSON.stringify(Object.fromEntries(usedSlots.entries())));
  const usedSlotsArray = Object.values(usedSlotsObjects);
  const usedSlotIds = usedSlotsArray.map((usedSlot: any) => usedSlot?._id);
  return this.timeslotModel.find({ _id: { $nin: usedSlotIds} });
}
  

async update(id: string, updateTimeslotDto: UpdateTimeslotDto):Promise<Timeslot>{
    return await this.timeslotModel.findByIdAndUpdate(id,updateTimeslotDto,{
        new:true,
        runValidators:true,
    });
  }

  async remove(id: string):Promise<Timeslot>{
    return await this.timeslotModel.findByIdAndDelete(id)
    
}
}
