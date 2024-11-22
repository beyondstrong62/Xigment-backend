import { IsOptional, IsBoolean, IsString, IsObject } from 'class-validator';

export class UpdateUserPreferenceDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsBoolean()
  marketing?: boolean;

  @IsOptional()
  @IsBoolean()
  newsletter?: boolean;

  @IsOptional()
  @IsBoolean()
  updates?: boolean;

  @IsOptional()
  @IsString()
  frequency?: string;

  @IsOptional()
  @IsObject()
  channels?: {
    email?: boolean;
    sms?: boolean;
    push?: boolean;
  };

  @IsOptional()
  @IsString()
  timezone?: string;
}
