import { Injectable } from '@nestjs/common';
import { CreateFoodsUnitDto } from './dto/create-foods-unit.dto';
import { UpdateFoodsUnitDto } from './dto/update-foods-unit.dto';

@Injectable()
export class FoodsUnitsService {
  create(createFoodsUnitDto: CreateFoodsUnitDto) {
    return 'This action adds a new foodsUnit';
  }

  findAll() {
    return `This action returns all foodsUnits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodsUnit`;
  }

  update(id: number, updateFoodsUnitDto: UpdateFoodsUnitDto) {
    return `This action updates a #${id} foodsUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodsUnit`;
  }
}
