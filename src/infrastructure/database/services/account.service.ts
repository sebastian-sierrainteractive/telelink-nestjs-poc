import { Injectable } from '@nestjs/common';
import { AccountService } from '../../../application/account/domain/service';
import {
  AccountId,
  AccountVendorId,
  CustomerId,
  SiteName,
} from 'src/application/account/domain';

@Injectable()
class AccountServiceImplementation implements AccountService {
  get(accountId: AccountId): Promise<
    Readonly<{
      id: AccountId;
      vendorId: AccountVendorId;
      customerId: CustomerId;
      siteName: SiteName;
      isEnabled: boolean;
      vendor: 'twilio';
    }>
  > {
    throw new Error('Method not implemented.');
  }
  getByCustomerId(customerId: CustomerId): Promise<
    Readonly<{
      id: AccountId;
      vendorId: AccountVendorId;
      customerId: CustomerId;
      siteName: SiteName;
      isEnabled: boolean;
      vendor: 'twilio';
    }>
  > {
    throw new Error('Method not implemented.');
  }
  getByVendorId(vendorId: AccountVendorId): Promise<
    Readonly<{
      id: AccountId;
      vendorId: AccountVendorId;
      customerId: CustomerId;
      siteName: SiteName;
      isEnabled: boolean;
      vendor: 'twilio';
    }>
  > {
    throw new Error('Method not implemented.');
  }
  create(
    account: Omit<
      Readonly<{
        id: AccountId;
        vendorId: AccountVendorId;
        customerId: CustomerId;
        siteName: SiteName;
        isEnabled: boolean;
        vendor: 'twilio';
      }>,
      'id'
    >,
  ): Promise<
    Readonly<{
      id: AccountId;
      vendorId: AccountVendorId;
      customerId: CustomerId;
      siteName: SiteName;
      isEnabled: boolean;
      vendor: 'twilio';
    }>
  > {
    throw new Error('Method not implemented.');
  }
}

export const AccountServiceProvider = {
  provide: AccountService,
  useClass: AccountServiceImplementation,
};
