import { Test, TestingModule } from '@nestjs/testing';
import { WorkAllocationController } from './work-allocation.controller';
import { WorkAllocationService } from './work-allocation.service';

describe('WorkAllocationController', () => {
  let controller: WorkAllocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkAllocationController],
      providers: [WorkAllocationService],
    }).compile();

    controller = module.get<WorkAllocationController>(WorkAllocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
