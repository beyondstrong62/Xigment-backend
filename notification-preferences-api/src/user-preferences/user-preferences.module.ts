import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferenceService } from '../services/user-preferences.service';
import { UserPreferenceController } from '../controllers/user-preferences.controller';
import { UserPreference, UserPreferenceSchema } from '../models/user-preference.schema';

@Module({
  providers: [], // Add your services
  controllers: [], // Add your controllers
})
export class UserPreferencesModule {}

