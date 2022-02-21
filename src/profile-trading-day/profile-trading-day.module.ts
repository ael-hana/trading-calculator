import { Module } from '@nestjs/common';
import { ProfileTradingDayController } from './profile-trading-day.controller';
import { ProfileTradingDayService } from './profile-trading-day.service';

@Module({
  controllers: [ProfileTradingDayController],
  providers: [ProfileTradingDayService],
})
export class ProfileTradingDayModule {}
