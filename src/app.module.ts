import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getPostgresConfig } from './configs/postgres.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PromoModule } from './promo/promo.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getPostgresConfig,
    }),
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}