/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RoleGuard } from 'src/auth/role/role.guard';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}
