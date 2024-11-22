import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { UserPreferenceService } from '../services/user-preferences.service';
import { CreateUserPreferenceDto } from '../user-preferences/create-user-preference.dto'; // Ensure correct relative path

@Controller('api/preferences')
export class UserPreferenceController {
  constructor(private readonly userPreferenceService: UserPreferenceService) {}

  @Post()
  create(@Body() createUserPreferenceDto: CreateUserPreferenceDto) {
    return this.userPreferenceService.create(createUserPreferenceDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.userPreferenceService.findOne(userId);
  }

  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() updateDto: any) {
    return this.userPreferenceService.update(userId, updateDto);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.userPreferenceService.delete(userId);
  }
}
