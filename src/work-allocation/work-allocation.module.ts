import { Module } from '@nestjs/common';
import { WorkAllocationService } from './work-allocation.service';
import { WorkAllocationController } from './work-allocation.controller';

@Module({
  controllers: [WorkAllocationController],
  providers: [WorkAllocationService]
})
export class WorkAllocationModule {}
