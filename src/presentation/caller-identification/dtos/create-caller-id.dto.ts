import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsEnum } from 'class-validator';

enum ValidStatuses {
  enabled = 'enabled',
  disabled = 'disabled',
}

export class CreateCallerIdDto {
  @ApiProperty()
  @IsString()
  customerId: string;

  @ApiProperty()
  @IsString()
  siteName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  twilioSubaccountSid: string;

  @ApiProperty()
  @IsString()
  twilioCustomerProfileSid: string;

  @ApiProperty()
  @IsString()
  displayName: string;

  @ApiProperty()
  @IsEnum(ValidStatuses)
  status: ValidStatuses;
}
