import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from '../models/user-preference.schema';

@Injectable()
export class UserPreferenceService {
  private readonly logger = new Logger(UserPreferenceService.name);

  constructor(@InjectModel(UserPreference.name) private userModel: Model<UserPreference>) {}

  // Create User Preference
  async create(createUserPreferenceDto: any): Promise<UserPreference> {
    this.logger.log('Creating a new user preference');
    try {
      const createdUser = new this.userModel(createUserPreferenceDto);
      return await createdUser.save();
    } catch (error) {
      this.logger.error('Error creating user preference', error.stack);
      throw new BadRequestException('Invalid data provided');
    }
  }

  // Find User Preference by userId
  async findOne(userId: string): Promise<UserPreference> {
    this.logger.debug(`Fetching preference for userId: ${userId}`);
    const userPreference = await this.userModel.findOne({ userId }).exec();
    if (!userPreference) {
      this.logger.warn(`No preference found for userId: ${userId}`);
      throw new NotFoundException(`Preference for userId: ${userId} not found`);
    }
    return userPreference;
  }

  // Update User Preference
  async update(userId: string, updateDto: any): Promise<UserPreference> {
    this.logger.log(`Updating user preference for userId: ${userId}`);
    const updatedUser = await this.userModel
      .findOneAndUpdate({ userId }, updateDto, { new: true })
      .exec();
    if (!updatedUser) {
      this.logger.warn(`No preference found to update for userId: ${userId}`);
      throw new NotFoundException(`Preference for userId: ${userId} not found`);
    }
    return updatedUser;
  }

  // Delete User Preference
  async delete(userId: string): Promise<UserPreference> {
    this.logger.warn(`Deleting user preference for userId: ${userId}`);
    const deletedUser = await this.userModel.findOneAndDelete({ userId }).exec();
    if (!deletedUser) {
      this.logger.warn(`No preference found to delete for userId: ${userId}`);
      throw new NotFoundException(`Preference for userId: ${userId} not found`);
    }
    return deletedUser;
  }
}
