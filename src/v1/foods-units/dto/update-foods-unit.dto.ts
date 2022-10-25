import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodsUnitDto } from './create-foods-unit.dto';

export class UpdateFoodsUnitDto extends PartialType(CreateFoodsUnitDto) {}
