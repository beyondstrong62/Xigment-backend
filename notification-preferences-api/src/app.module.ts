import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesModule } from './user-preferences/user-preferences.module';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI), // Use the updated .env value
    UserPreferencesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
