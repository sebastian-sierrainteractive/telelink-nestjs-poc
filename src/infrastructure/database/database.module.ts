import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallerId, CallerIdSchema } from './models/caller-id.model';
import { CallerIdService } from './services/caller-id.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forFeature([
      { name: CallerId.name, schema: CallerIdSchema },
    ]),
  ],
  providers: [CallerIdService],
  exports: [CallerIdService],
})
export class DatabaseModule {}
