import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { AccountController } from './account/account.controller';
import { CallerIdController } from './caller-identification/caller-id.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [AccountController, CallerIdController],
})
export class PresentationModule {}
