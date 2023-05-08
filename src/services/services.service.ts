/* eslint-disable prettier/prettier */
import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './entities/service.schemas';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name)
    private serviceModel:mongoose.Model<Service>
){}

async create(createServiceDto: CreateServiceDto):Promise<Service> {
  const service=await this.serviceModel.create(createServiceDto)
      return service;
}

async findAll():Promise<Service[]> {
  const services=await this.serviceModel.find()
      return services;
}

async findOne(id:string):Promise<Service>{
  const service=await this.serviceModel.findById(id)
  if(!service){
      throw new NotFoundException('Not registered service...!!!');
  }
  return service
}


async update(id: string, updateServiceDto: UpdateServiceDto):Promise<Service>{
  return await this.serviceModel.findByIdAndUpdate(id,updateServiceDto,{
      new:true,
      runValidators:true,
  });
}

async remove(id: string):Promise<Service>{
  return await this.serviceModel.findByIdAndDelete(id)
  
}

}
