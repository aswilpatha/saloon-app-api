/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
import { Timeslot } from './entities/timeslot.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class TimeslotService {
  constructor(
    @InjectModel(Timeslot.name)
    private timeslotModel:mongoose.Model<Timeslot>
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
