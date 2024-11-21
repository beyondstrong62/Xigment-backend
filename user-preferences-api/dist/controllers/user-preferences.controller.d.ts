import { UserPreferencesService } from '../services/user-preferences.service';
import { UserPreference } from '../models/user-preference.model';
export declare class UserPreferencesController {
    private readonly userPreferencesService;
    constructor(userPreferencesService: UserPreferencesService);
    createUserPreferences(body: {
        userId: string;
        email: string;
        preferences: any;
        timezone: string;
    }): Promise<UserPreference>;
    getUserPreferences(userId: string): Promise<UserPreference | null>;
    updateUserPreferences(userId: string, preferences: any): Promise<UserPreference | null>;
    deleteUserPreferences(userId: string): Promise<any>;
}
