import { Controller, Get, Param } from '@nestjs/common';
import { ProfileTradingDayService } from './profile-trading-day.service';

@Controller()
export class ProfileTradingDayController {
  constructor(
    private readonly profileTradingDayService: ProfileTradingDayService,
  ) {}

  @Get('/:marketName')
  getIB(@Param('marketName') marketName: string): Promise<string> {
    return this.profileTradingDayService.getIb(marketName);
  }
}
