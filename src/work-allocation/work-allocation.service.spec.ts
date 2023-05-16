import { Test, TestingModule } from '@nestjs/testing';
import { WorkAllocationService } from './work-allocation.service';

describe('WorkAllocationService', () => {
  let service: WorkAllocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkAllocationService],
    }).compile();

    service = module.get<WorkAllocationService>(WorkAllocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
