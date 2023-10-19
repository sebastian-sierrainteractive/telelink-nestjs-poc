import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructure';
import { useCases as accountUseCases } from './account';
import { useCases as ciUseCases } from './caller-id';

const useCases = [
  ...Object.values(accountUseCases),
  ...Object.values(ciUseCases),
];

@Module({
  imports: [DatabaseModule],
  providers: [...useCases],
  exports: [...useCases],
})
export class ApplicationModule {}
