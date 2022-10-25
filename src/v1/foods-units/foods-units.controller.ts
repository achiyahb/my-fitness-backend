import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodsUnitsService } from './foods-units.service';
import { CreateFoodsUnitDto } from './dto/create-foods-unit.dto';
import { UpdateFoodsUnitDto } from './dto/update-foods-unit.dto';

@Controller('foods-units')
export class FoodsUnitsController {
  constructor(private readonly foodsUnitsService: FoodsUnitsService) {}

  @Post()
  create(@Body() createFoodsUnitDto: CreateFoodsUnitDto) {
    return this.foodsUnitsService.create(createFoodsUnitDto);
  }

  @Get()
  findAll() {
    return this.foodsUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodsUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodsUnitDto: UpdateFoodsUnitDto) {
    return this.foodsUnitsService.update(+id, updateFoodsUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodsUnitsService.remove(+id);
  }
}
