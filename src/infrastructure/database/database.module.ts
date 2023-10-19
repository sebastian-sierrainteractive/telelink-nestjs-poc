import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CallerId, CallerIdSchema } from './models/caller-id.model';
import { CallerIdService } from './services/caller-id.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URL'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: CallerId.name, schema: CallerIdSchema },
    ]),
  ],
  providers: [CallerIdService],
  exports: [CallerIdService],
})
export class DatabaseModule {}
