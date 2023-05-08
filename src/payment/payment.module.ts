/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './entities/payment.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:'Payment',schema:PaymentSchema}])],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
