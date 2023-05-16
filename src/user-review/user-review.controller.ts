/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserReviewService } from './user-review.service';
import { CreateUserReviewDto } from './dto/create-user-review.dto';
import { UpdateUserReviewDto } from './dto/update-user-review.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/auth/role/role.guard';

@Controller('user-reviews')
export class UserReviewController {
  constructor(private readonly userReviewService: UserReviewService) {}

  @Post()
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  create(@Body() createUserReviewDto: CreateUserReviewDto) {
    return this.userReviewService.create(createUserReviewDto);
  }

  @Get()
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  findAll() {
    return this.userReviewService.findAll();
  }

  @Get(':id')
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  findOne(@Param('id') id: string) {
    return this.userReviewService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin','customer')
  @UseGuards(AuthGuard(),RoleGuard)
  update(@Param('id') id: string, @Body() updateUserReviewDto: UpdateUserReviewDto) {
    return this.userReviewService.update(id, updateUserReviewDto);
  }

  @Delete(':id')
  @Roles('admin')
  @UseGuards(AuthGuard(),RoleGuard)
  remove(@Param('id') id: string) {
    return this.userReviewService.remove(id);
  }
}
