import { Role } from './role';

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}
export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}
export const AllRole: UserRole[] = [UserRole.ADMIN, UserRole.USER];

export interface User {
    id: string;
    fullName: string;
    password: string;
    email: string;
    gender: Gender;
    mobile: string;
    token: string;
    isActive: boolean;
    createAt: Date;
    updateAt: Date;
    role: Role;
    imageUrl: string;
}
