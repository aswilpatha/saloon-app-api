/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.schema';
import { Roles } from 'src/auth/roles/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/role/role.guard';

@Controller('sessions')
export class SessionController {
  constructor(private sessionService :SessionService ){}

    @Get()
    @Roles('admin','customer')
    @UseGuards(AuthGuard(),RoleGuard)
    async getAllSessions():Promise<Session[]>{
        return this.sessionService.findAll();
    }

    @Post()
    @Roles('admin')
    @UseGuards(AuthGuard(),RoleGuard)
    async createSession(
        @Body()
        session:CreateSessionDto,
        ):Promise<Session>{
        return this.sessionService.create(session);
    }

    @Get(':id')@Roles('admin','customer')
    @UseGuards(AuthGuard(),RoleGuard)
    async getSessionById(
        @Param('id')
        id:string
    ):Promise<Session>{
        return this.sessionService.findById(id);
    }

    @Put(':id')
    @Roles('admin')
    @UseGuards(AuthGuard(),RoleGuard)
    async updateSession(
        @Param('id')
        id:string,
        @Body()
        session:UpdateSessionDto,
        ):Promise<Session>{
        return this.sessionService.updateById(id,session);
    }

    @Delete(':id')
    @Roles('admin')
    @UseGuards(AuthGuard(),RoleGuard)
    async deleteSessionById(
        @Param('id')
        id:string
    ):Promise<Session>{
        return this.sessionService.deleteById(id);
    }
}
