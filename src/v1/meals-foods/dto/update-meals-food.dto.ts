import { PartialType } from '@nestjs/mapped-types';
import { CreateMealsFoodDto } from './create-meals-food.dto';

export class UpdateMealsFoodDto extends PartialType(CreateMealsFoodDto) {}
