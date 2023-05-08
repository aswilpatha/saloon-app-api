import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { ServicesModule } from './services/services.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    CustomerModule,
    EmployeeModule,
    ServicesModule,
    AppointmentModule,
    PaymentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
