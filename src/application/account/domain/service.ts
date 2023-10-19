import { Account, AccountId, AccountVendorId, CustomerId } from './model';

export abstract class AccountService {
  abstract get(accountId: AccountId): Promise<Account>;
  abstract getByCustomerId(customerId: CustomerId): Promise<Account>;
  abstract getByVendorId(vendorId: AccountVendorId): Promise<Account | null>;
  abstract create(account: Omit<Account, 'id'>): Promise<Account>;
}
