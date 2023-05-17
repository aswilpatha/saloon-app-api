/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TimeslotService } from './timeslot.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/role/role.guard';

@Controller('timeslots')
export class TimeslotController {
  constructor(private readonly timeslotService: TimeslotService) {}

  @Post()
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  create(@Body() createTimeslotDto: CreateTimeslotDto) {
    return this.timeslotService.create(createTimeslotDto);
  }

  @Get()
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  findAll() {
    return this.timeslotService.findAll();
  }

  @Get('unused')
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  unusedSlots() {
    return this.timeslotService.unUsedTimeSlots();
  }

  @Get(':id')
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  findOne(@Param('id') id: string) {
    return this.timeslotService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  update(@Param('id') id: string, @Body() updateTimeslotDto: UpdateTimeslotDto) {
    return this.timeslotService.update(id, updateTimeslotDto);
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  remove(@Param('id') id: string) {
    return this.timeslotService.remove(id);
  }
}
