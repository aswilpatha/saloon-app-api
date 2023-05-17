/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.schemas';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Appointment.name)
    private appointmentModel:mongoose.Model<Appointment>
  ){}

  async create(createAppointmentDto: CreateAppointmentDto):Promise<Appointment> {
    const appointment=await this.appointmentModel.create(createAppointmentDto)
        return appointment;
  }

  async findAll(query = {}):Promise<Appointment[]> {
    const appointments=await this.appointmentModel.find(query)
        return appointments;
  }

  async findOne(id:string):Promise<Appointment>{
    const appointment=await this.appointmentModel.findById(id)
    if(!appointment){
        throw new NotFoundException('Not a registered appointment...!!!');
    }
    return appointment;
}

async update(id: string, updateAppointmentDto: UpdateAppointmentDto):Promise<Appointment>{
    return await this.appointmentModel.findByIdAndUpdate(id,updateAppointmentDto,{
        new:true,
        runValidators:true,
    });
  }

  async remove(id: string):Promise<Appointment>{
    return await this.appointmentModel.findByIdAndDelete(id)
    
}


}
