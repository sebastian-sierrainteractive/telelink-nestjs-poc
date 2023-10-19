import {
  AccountId,
  CallerIdentification,
  CallerIdentificationId,
} from './model';

export abstract class CallerIdService {
  abstract create(
    callerIdentification: Omit<CallerIdentification, 'id'>,
  ): Promise<CallerIdentification>;
  abstract get(id: CallerIdentificationId): Promise<CallerIdentification>;
  abstract getByAccountId(
    accountId: AccountId,
  ): Promise<CallerIdentification | null>;
  abstract update(
    id: CallerIdentificationId,
    update: Partial<CallerIdentification>,
  ): Promise<CallerIdentification>;
  abstract delete(id: CallerIdentificationId): Promise<void>;
}
