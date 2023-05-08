/* eslint-disable prettier/prettier */
import {Injectable,NotFoundException } from '@nestjs/common';
import { Customer } from './schemas/customer.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(Customer.name)
        private customerModel:mongoose.Model<Customer>
    ){}

    async findAll():Promise<Customer[]>{
        const customers=await this.customerModel.find()
        return customers;
    }

    async create(Customer):Promise<Customer>{
        const customer=await this.customerModel.create(Customer)
        return customer
    }

    async findById(id:string):Promise<Customer>{
        const customer=await this.customerModel.findById(id)
        if(!customer){
            throw new NotFoundException('Not registered customer...!!!');
        }
        return customer
    }

    async updateById(id:string,customer:Customer):Promise<Customer>{
        return await this.customerModel.findByIdAndUpdate(id,customer,{
            new:true,
            runValidators:true,
        });
        
    }

    async deleteById(id:string):Promise<Customer>{
        return await this.customerModel.findByIdAndDelete(id)
        
    }




    
}
