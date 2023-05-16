/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  remove(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }
}
