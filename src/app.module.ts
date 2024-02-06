import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { PromoModule } from './promo/promo.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PromoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// commit: env + config  ++ init