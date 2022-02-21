import { Test, TestingModule } from '@nestjs/testing';
import { ProfileTradingDayService } from './profile-trading-day.service';

describe('ProfileTradingDayService', () => {
  let service: ProfileTradingDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileTradingDayService],
    }).compile();

    service = module.get<ProfileTradingDayService>(ProfileTradingDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should test argv', async () => {
    const resultat = await service.getIb('FGBL');

    expect(resultat).toBe('FGBL ib :)');
  });
});
