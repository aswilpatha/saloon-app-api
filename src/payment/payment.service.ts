/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.schemas';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private paymentModel:mongoose.Model<Payment>
  ){}

  async create(createPaymentDto: CreatePaymentDto):Promise<Payment> {
    const payment=await this.paymentModel.create(createPaymentDto)
        return payment;
  }


  async findAll():Promise<Payment[]> {
    const payments=await this.paymentModel.find()
        return payments;
  }

  async findOne(id:string):Promise<Payment>{
    const payment=await this.paymentModel.findById(id)
    if(!payment){
        throw new NotFoundException('Not a registered payments...!!!');
    }
    return payment;
}

async update(id: string, updatePaymentDto: UpdatePaymentDto):Promise<Payment>{
    return await this.paymentModel.findByIdAndUpdate(id,updatePaymentDto,{
        new:true,
        runValidators:true,
    });
  }

  async remove(id: string):Promise<Payment>{
    return await this.paymentModel.findByIdAndDelete(id)
    
}
}
