import { Injectable } from '@nestjs/common';
import { CreateWorkAllocationDto } from './dto/create-work-allocation.dto';
import { UpdateWorkAllocationDto } from './dto/update-work-allocation.dto';

@Injectable()
export class WorkAllocationService {
  create(createWorkAllocationDto: CreateWorkAllocationDto) {
    return 'This action adds a new workAllocation';
  }

  findAll() {
    return `This action returns all workAllocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workAllocation`;
  }

  update(id: number, updateWorkAllocationDto: UpdateWorkAllocationDto) {
    return `This action updates a #${id} workAllocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} workAllocation`;
  }
}
