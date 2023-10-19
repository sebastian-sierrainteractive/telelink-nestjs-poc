import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCallerIdDto } from './dtos/create-caller-id.dto';
import { CreateCallerIdUseCase } from 'src/application/caller-id/use-cases';
import { tagged } from 'src/shared';
import {
  AccountVendorId,
  CustomerId,
  SiteName,
} from 'src/application/account/domain';
import {
  CallerIdentificationDisplayName,
  CustomerProfileVendorId,
  EmailAddress,
} from 'src/application/caller-id/domain';

@ApiTags('Caller Id')
@Controller('/caller-id')
export class CallerIdController {
  constructor(private readonly createCallerIdUseCase: CreateCallerIdUseCase) {}

  @Post()
  async create(@Body() body: CreateCallerIdDto) {
    const data = {
      customerId: tagged<CustomerId>(body.customerId),
      siteName: tagged<SiteName>(body.siteName),
      email: tagged<EmailAddress>(body.email),
      accountVendorId: tagged<AccountVendorId>(body.twilioSubaccountSid),
      customerProfileVendorId: tagged<CustomerProfileVendorId>(
        body.twilioCustomerProfileSid,
      ),
      displayName: tagged<CallerIdentificationDisplayName>(body.displayName),
      vendor: 'twilio',
      status: body.status,
    } as const;

    await this.createCallerIdUseCase.execute(data);
  }
}
