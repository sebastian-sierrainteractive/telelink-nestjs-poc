import { Tagged } from '../../../shared';

export type AccountId = Tagged<'AccountId', string>;
export type AccountVendorId = Tagged<'AccountVendorId', string>;

export type CustomerId = Tagged<'CustomerId', string>;
export type SiteName = Tagged<'SiteName', string>;

export const vendorNames = ['twilio'] as const;
export type VendorName = (typeof vendorNames)[number];

export type Account = Readonly<{
  id: AccountId;
  vendorId: AccountVendorId;
  customerId: CustomerId;
  siteName: SiteName;
  isEnabled: boolean;
  vendor: VendorName;
}>;
