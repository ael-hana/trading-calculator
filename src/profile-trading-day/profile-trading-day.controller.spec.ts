import { Test, TestingModule } from '@nestjs/testing';
import { ProfileTradingDayController } from './profile-trading-day.controller';
import { ProfileTradingDayService } from './profile-trading-day.service';

describe('ProfileTradingDayController', () => {
  let controller: ProfileTradingDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileTradingDayController],
      providers: [ProfileTradingDayService],
    }).compile();

    controller = module.get<ProfileTradingDayController>(
      ProfileTradingDayController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
