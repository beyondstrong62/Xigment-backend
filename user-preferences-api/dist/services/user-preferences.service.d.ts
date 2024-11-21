import { Model } from 'mongoose';
import { UserPreference } from '../models/user-preference.model';
export declare class UserPreferencesService {
    private readonly userPreferenceModel;
    constructor(userPreferenceModel: Model<UserPreference>);
    createUserPreferences(userId: string, email: string, preferences: any, timezone: string): Promise<UserPreference>;
    getUserPreferences(userId: string): Promise<UserPreference | null>;
    updateUserPreferences(userId: string, preferences: any): Promise<UserPreference | null>;
    deleteUserPreferences(userId: string): Promise<any>;
}
