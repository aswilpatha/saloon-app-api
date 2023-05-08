/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './entities/employee.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Employee',schema:EmployeeSchema}])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
