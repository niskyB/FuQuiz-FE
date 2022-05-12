import joi from 'joi';

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

export const AllRole: UserRole[] = [UserRole.ADMIN, UserRole.USER];

export interface User {
    id: string;
    name: string;
    username: string;
    password: string;
    email: string;
    googleId: string;
    createDate: string;
    updateDate: string;
    status: UserStatus;
    role: UserRole;
}

export const userSchema = {
    username: joi.string().min(1).max(255).required(),
    password: joi.string().min(1).max(255).required(),
    email: joi
        .string()
        .email({ tlds: { allow: false } })
        .min(1)
        .max(255)
        .required(),
    name: joi.string().min(1).max(255).required(),
};
