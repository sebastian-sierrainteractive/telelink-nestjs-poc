import { Inject, Injectable } from '@nestjs/common';
import { UseCase } from '@shared/types';
import { VendorName } from '@application/account/domain';
import {
  AccountId,
  AccountVendorId,
  CallerIdentificationDisplayName,
  CallerIdentificationId,
  CallerIdService,
  CustomerId,
  CustomerProfileId,
  CustomerProfileVendorId,
  EmailAddress,
  SiteName,
} from '../domain';

export type InputUseCase = Readonly<{
  customerId: CustomerId;
  siteName: SiteName;
  email: EmailAddress;
  accountVendorId: AccountVendorId;
  customerProfileVendorId: CustomerProfileVendorId;
  displayName: CallerIdentificationDisplayName;
  vendor: VendorName;
  status: 'enabled' | 'disabled';
}>;

export type OutputUseCase = CallerIdentificationId;

@Injectable()
export class CreateCallerIdUseCase
  implements UseCase<InputUseCase, OutputUseCase>
{
  constructor(
    @Inject(CallerIdService)
    private readonly callerIdService: CallerIdService,
  ) {}

  async execute(input: InputUseCase): Promise<OutputUseCase> {
    const callerId = await this.callerIdService.create({
      accountId: '<id>' as AccountId,
      customerProfileId: '<id>' as CustomerProfileId,
      displayName: input.displayName,
      status: 'disabled',
      vendorId: null,
    });

    return callerId.id;
  }
}
