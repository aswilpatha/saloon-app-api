/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('customers')
export class CustomerController {
    constructor(private customerService :CustomerService ){}

    @Get()
    @Roles('admin','customer')
    @UseGuards(AuthGuard(),RoleGuard)
    async getAllCustomers():Promise<Customer[]>{
        return this.customerService.findAll();
    }

    @Post()
    @Roles('admin','customer')
    @UseGuards(AuthGuard(),RoleGuard)
    async createCustomer(
        @Body()
        customer:CreateCustomerDto,
        ):Promise<Customer>{
        return this.customerService.create(customer);
    }

    @Get(':id')@Roles('admin','customer')
    @UseGuards(AuthGuard(),RoleGuard)
    async getCustomerById(
        @Param('id')
        id:string
    ):Promise<Customer>{
        return this.customerService.findById(id);
    }

    @Put(':id')
    @Roles('admin','customer')
    @UseGuards(AuthGuard(),RoleGuard)
    async updateCustomer(
        @Param('id')
        id:string,
        @Body()
        customer:UpdateCustomerDto,
        ):Promise<Customer>{
        return this.customerService.updateById(id,customer);
    }

    @Delete(':id')
    @Roles('admin','customer')
    @UseGuards(AuthGuard(),RoleGuard)
    async deleteCustomerById(
        @Param('id')
        id:string
    ):Promise<Customer>{
        return this.customerService.deleteById(id);
    }
}


