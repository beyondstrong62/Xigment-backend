import { Test, TestingModule } from '@nestjs/testing';
import { UserPreferenceService } from '../services/user-preferences.service';
import { getModelToken } from '@nestjs/mongoose';
import { UserPreference } from '../models/user-preference.schema';

const mockUserPreference = {
  userId: '123',
  email: 'test@example.com',
  preferences: {
    marketing: true,
    newsletter: false,
    updates: true,
    frequency: 'weekly',
    channels: {
      email: true,
      sms: false,
      push: true,
    },
  },
  timezone: 'UTC',
};

describe('UserPreferenceService', () => {
  let service: UserPreferenceService;
  let model: any;

  const mockModel = {
    create: jest.fn().mockResolvedValue(mockUserPreference),
    findOne: jest.fn().mockResolvedValue(mockUserPreference),
    findOneAndUpdate: jest.fn().mockResolvedValue(mockUserPreference),
    findOneAndDelete: jest.fn().mockResolvedValue(mockUserPreference),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserPreferenceService,
        {
          provide: getModelToken(UserPreference.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<UserPreferenceService>(UserPreferenceService);
    model = module.get(getModelToken(UserPreference.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user preference', async () => {
    const result = await service.create(mockUserPreference);
    expect(result).toEqual(mockUserPreference);
    expect(model.create).toHaveBeenCalledWith(mockUserPreference);
  });

  it('should find a user preference by userId', async () => {
    const result = await service.findOne('123');
    expect(result).toEqual(mockUserPreference);
    expect(model.findOne).toHaveBeenCalledWith({ userId: '123' });
  });

  it('should update a user preference', async () => {
    const updateDto = { timezone: 'PST' };
    const result = await service.update('123', updateDto);
    expect(result).toEqual(mockUserPreference);
    expect(model.findOneAndUpdate).toHaveBeenCalledWith(
      { userId: '123' },
      updateDto,
      { new: true },
    );
  });

  it('should delete a user preference', async () => {
    const result = await service.delete('123');
    expect(result).toEqual(mockUserPreference);
    expect(model.findOneAndDelete).toHaveBeenCalledWith({ userId: '123' });
  });
});
