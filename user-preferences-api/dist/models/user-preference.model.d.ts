import { Schema, Document } from 'mongoose';
export interface UserPreference extends Document {
    userId: string;
    email: string;
    preferences: {
        marketing: boolean;
        newsletter: boolean;
        updates: boolean;
        frequency: 'daily' | 'weekly' | 'monthly' | 'never';
        channels: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
    };
    timezone: string;
    lastUpdated: Date;
    createdAt: Date;
}
export declare const UserPreferenceSchema: Schema<UserPreference, import("mongoose").Model<UserPreference, any, any, any, Document<unknown, any, UserPreference> & UserPreference & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserPreference, Document<unknown, {}, import("mongoose").FlatRecord<UserPreference>> & import("mongoose").FlatRecord<UserPreference> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
