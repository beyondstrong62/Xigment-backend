import { Test, TestingModule } from '@nestjs/testing';
import { UserPreferenceController } from '../controllers/user-preferences.controller';
import { UserPreferenceService } from '../services/user-preferences.service';
import { UpdateUserPreferenceDto } from '../user-preferences/update-user-preference.dto'; // Ensure the DTO is imported

// Update mockUserPreference to match the expected structure of the DTO
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

describe('UserPreferenceController', () => {
  let controller: UserPreferenceController;
  let service: UserPreferenceService;

  const mockService = {
    create: jest.fn().mockResolvedValue(mockUserPreference),
    findOne: jest.fn().mockResolvedValue(mockUserPreference),
    update: jest.fn().mockResolvedValue(mockUserPreference),
    delete: jest.fn().mockResolvedValue(mockUserPreference),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPreferenceController],
      providers: [
        {
          provide: UserPreferenceService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<UserPreferenceController>(UserPreferenceController);
    service = module.get<UserPreferenceService>(UserPreferenceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user preference', async () => {
    const result = await controller.create(mockUserPreference);
    expect(result).toEqual(mockUserPreference);
    expect(service.create).toHaveBeenCalledWith(mockUserPreference);
  });

  it('should find a user preference by userId', async () => {
    const result = await controller.findOne('123');
    expect(result).toEqual(mockUserPreference);
    expect(service.findOne).toHaveBeenCalledWith('123');
  });

  it('should update a user preference', async () => {
    const updateDto: UpdateUserPreferenceDto = { timezone: 'PST' }; // Ensure correct DTO is passed
    const result = await controller.update('123', updateDto);
    expect(result).toEqual(mockUserPreference);
    expect(service.update).toHaveBeenCalledWith('123', updateDto);
  });

  it('should delete a user preference', async () => {
    const result = await controller.delete('123');
    expect(result).toEqual(mockUserPreference);
    expect(service.delete).toHaveBeenCalledWith('123');
  });
});
