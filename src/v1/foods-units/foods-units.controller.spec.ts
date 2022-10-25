import { Test, TestingModule } from '@nestjs/testing';
import { FoodsUnitsController } from './foods-units.controller';
import { FoodsUnitsService } from './foods-units.service';

describe('FoodsUnitsController', () => {
  let controller: FoodsUnitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodsUnitsController],
      providers: [FoodsUnitsService],
    }).compile();

    controller = module.get<FoodsUnitsController>(FoodsUnitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
