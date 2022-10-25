import { Test, TestingModule } from '@nestjs/testing';
import { MealsFoodsController } from './meals-foods.controller';
import { MealsFoodsService } from './meals-foods.service';

describe('MealsFoodsController', () => {
  let controller: MealsFoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealsFoodsController],
      providers: [MealsFoodsService],
    }).compile();

    controller = module.get<MealsFoodsController>(MealsFoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
