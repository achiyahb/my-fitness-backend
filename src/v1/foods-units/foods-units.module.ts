import { Module } from '@nestjs/common';
import { FoodsUnitsService } from './foods-units.service';
import { FoodsUnitsController } from './foods-units.controller';

@Module({
  controllers: [FoodsUnitsController],
  providers: [FoodsUnitsService]
})
export class FoodsUnitsModule {}
