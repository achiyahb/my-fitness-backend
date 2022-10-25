import { Test, TestingModule } from '@nestjs/testing';
import { FoodsUnitsService } from './foods-units.service';

describe('FoodsUnitsService', () => {
  let service: FoodsUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodsUnitsService],
    }).compile();

    service = module.get<FoodsUnitsService>(FoodsUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
