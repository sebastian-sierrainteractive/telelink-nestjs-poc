import { Injectable } from '@nestjs/common';
import { UseCase } from '@shared/types';
import {
  Account,
  AccountVendorId,
  CustomerId,
  SiteName,
  VendorName,
} from '../domain';

export type InputUseCase = Readonly<{
  customerId: CustomerId;
  siteName: SiteName;
  vendor: VendorName;
  accountVendorId: AccountVendorId;
}>;

@Injectable()
export class CreateAccountUseCase implements UseCase<InputUseCase, Account> {
  execute(input: InputUseCase): Promise<Account> {
    throw new Error('Method not implemented.');
  }
}
