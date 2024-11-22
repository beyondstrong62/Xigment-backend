// src/user-preferences/create-user-preference.dto.ts
export class CreateUserPreferenceDto {
    userId: string;
    email: string;
    preferences: {
      marketing: boolean;
      newsletter: boolean;
      updates: boolean;
      frequency: string;
      channels: {
        email: boolean;
        sms: boolean;
        push: boolean;
      };
    };
    timezone: string;
  }
  