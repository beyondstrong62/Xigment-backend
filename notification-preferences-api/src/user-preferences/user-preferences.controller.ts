import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserPreferenceService } from '../services/user-preferences.service';
import { CreateUserPreferenceDto } from '../user-preferences/create-user-preference.dto'; // Ensure correct relative path
import { UpdateUserPreferenceDto } from '../user-preferences/update-user-preference.dto';
import { UserPreference } from '../models/user-preference.schema';

@Controller('user-preferences')
export class UserPreferenceController {
  constructor(private readonly userPreferenceService: UserPreferenceService) {}

  @Post()
  async create(@Body() createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    return this.userPreferenceService.create(createUserPreferenceDto);
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string): Promise<UserPreference> {
    return this.userPreferenceService.findOne(userId);
  }

  @Put(':userId')
  async update(
    @Param('userId') userId: string,
    @Body() updateUserPreferenceDto: UpdateUserPreferenceDto,
  ): Promise<UserPreference> {
    return this.userPreferenceService.update(userId, updateUserPreferenceDto);
  }

  @Delete(':userId')
  async delete(@Param('userId') userId: string): Promise<UserPreference> {
    return this.userPreferenceService.delete(userId);
  }
}
