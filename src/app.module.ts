import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileTradingDayModule } from './profile-trading-day/profile-trading-day.module';

@Module({
  imports: [ProfileTradingDayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
