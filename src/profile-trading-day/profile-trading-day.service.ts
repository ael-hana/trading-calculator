import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileTradingDayService {
  async getIb(marketName: string): Promise<string> {
    return `${marketName} ib :)`;
  }
}
