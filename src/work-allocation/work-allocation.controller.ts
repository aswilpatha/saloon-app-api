import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkAllocationService } from './work-allocation.service';
import { CreateWorkAllocationDto } from './dto/create-work-allocation.dto';
import { UpdateWorkAllocationDto } from './dto/update-work-allocation.dto';

@Controller('work-allocation')
export class WorkAllocationController {
  constructor(private readonly workAllocationService: WorkAllocationService) {}

  @Post()
  create(@Body() createWorkAllocationDto: CreateWorkAllocationDto) {
    return this.workAllocationService.create(createWorkAllocationDto);
  }

  @Get()
  findAll() {
    return this.workAllocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workAllocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkAllocationDto: UpdateWorkAllocationDto) {
    return this.workAllocationService.update(+id, updateWorkAllocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workAllocationService.remove(+id);
  }
}
