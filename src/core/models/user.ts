import { Role } from './role';

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
    fullName: string;
    password: string;
    email: string;
    gender: string;
    mobile: string;
    token: string;
    isActive: boolean;
    createAt: Date;
    updateAt: Date;
    role: Role;
}
