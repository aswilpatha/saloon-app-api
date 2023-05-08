/* eslint-disable prettier/prettier */
import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel:mongoose.Model<Employee>
){}
  async create(createEmployeeDto: CreateEmployeeDto):Promise<Employee> {
    const employee=await this.employeeModel.create(createEmployeeDto)
        return employee;
  }

  async findAll():Promise<Employee[]> {
    const employees=await this.employeeModel.find()
        return employees;
  }

  async findOne(id:string):Promise<Employee>{
    const employee=await this.employeeModel.findById(id)
    if(!employee){
        throw new NotFoundException('Not registered employee...!!!');
    }
    return employee
}

async update(id: string, updateEmployeeDto: UpdateEmployeeDto):Promise<Employee>{
    return await this.employeeModel.findByIdAndUpdate(id,updateEmployeeDto,{
        new:true,
        runValidators:true,
    });
  }

  async remove(id: string):Promise<Employee>{
    return await this.employeeModel.findByIdAndDelete(id)
    
}

}
