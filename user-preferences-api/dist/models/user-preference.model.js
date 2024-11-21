"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferenceSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserPreferenceSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true },
    preferences: {
        marketing: { type: Boolean, required: true },
        newsletter: { type: Boolean, required: true },
        updates: { type: Boolean, required: true },
        frequency: { type: String, enum: ['daily', 'weekly', 'monthly', 'never'], required: true },
        channels: {
            email: { type: Boolean, required: true },
            sms: { type: Boolean, required: true },
            push: { type: Boolean, required: true },
        },
    },
    timezone: { type: String, required: true },
    lastUpdated: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=user-preference.model.js.map