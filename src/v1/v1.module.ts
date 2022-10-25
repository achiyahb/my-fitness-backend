import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MealsModule } from './meals/meals.module';
import { FoodsModule } from './foods/foods.module';
import { MealsFoodsModule } from './meals-foods/meals-foods.module';
import { UnitsModule } from './units/units.module';
import { FoodsUnitsModule } from './foods-units/foods-units.module';

@Module({
  imports: [UsersModule, AuthModule, MealsModule, FoodsModule, MealsFoodsModule, UnitsModule, FoodsUnitsModule],
})
export class V1Module {}
