/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'Customer',schema:CustomerSchema}])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
