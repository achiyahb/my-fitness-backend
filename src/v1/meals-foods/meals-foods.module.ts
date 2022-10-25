import { Module } from '@nestjs/common';
import { MealsFoodsService } from './meals-foods.service';
import { MealsFoodsController } from './meals-foods.controller';

@Module({
  controllers: [MealsFoodsController],
  providers: [MealsFoodsService]
})
export class MealsFoodsModule {}
