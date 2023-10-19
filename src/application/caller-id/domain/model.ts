import { Tagged } from '../../../shared';

export type AccountId = Tagged<'AccountId', string>;
export type AccountVendorId = Tagged<'AccountVendorId', string>;

export type CustomerId = Tagged<'CustomerId', string>;
export type SiteName = Tagged<'SiteName', string>;
export type EmailAddress = Tagged<'EmailAddress', string>;

export type CustomerProfileId = Tagged<'CustomerProfileId', string>;

export type CallerIdentificationId = Tagged<'CallerIdentificationId', string>;
export type CallerIdentificationVendorId = Tagged<
  'CallerIdentificationVendorId',
  string
>;

export type CustomerProfileVendorId = Tagged<'CustomerProfileVendorId', string>;
export type PhoneNumberId = Tagged<'PhoneNumberId', string>;
export type PhoneNumberVendorId = Tagged<'PhoneNumberVendorId', string>;

export type CallerIdentificationDisplayName = Tagged<
  'CallerIdentificationDisplayName',
  string
>;

const CALLER_DISPLAY_NAME_REGEX = /^[A-Za-z]{1}[A-Za-z0-9\s,.]{0,14}$/;

/**
 * Caller Identification Display Name should:
 * - begin with a letter;
 * - only contain letters, numbers, periods, commas and spaces;
 * - be a maximum of 15 characters.
 */
export const isCallerIdentificationDisplayName = (
  value: string,
): value is CallerIdentificationDisplayName =>
  CALLER_DISPLAY_NAME_REGEX.test(value);

export const callerIdentificationStatuses = [
  'draft',
  'in-review',
  'approved',
  'rejected',
  'disabled',
] as const;
export type CallerIdentificationStatus =
  (typeof callerIdentificationStatuses)[number];

type CallerIdentificationBase<Status extends CallerIdentificationStatus> =
  Readonly<{
    id: CallerIdentificationId;
    displayName: CallerIdentificationDisplayName;
    accountId: AccountId;
    customerProfileId: CustomerProfileId;
    status: Status;
    vendorId: Status extends 'disabled' ? null : CallerIdentificationVendorId;
  }>;
type EnabledCallerIdentification = CallerIdentificationBase<
  Exclude<CallerIdentificationStatus, 'disabled'>
>;
type DisabledCallerIdentification = CallerIdentificationBase<'disabled'>;

export type CallerIdentification =
  | EnabledCallerIdentification
  | DisabledCallerIdentification;
