import { Role, UserRole } from './role';

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}
export const AllRole: UserRole[] = [UserRole.ADMIN, UserRole.CUSTOMER, UserRole.EXPERT, UserRole.MARKETING, UserRole.SALE];

export interface User {
    id: string;
    typeId: string;
    fullName: string;
    password: string;
    email: string;
    gender: Gender;
    mobile: string;
    token: string;
    isActive: boolean;
    createdAt: string;
    updateAt: string;
    role: Role;
    imageUrl: string;
}

export interface Customer {
    id: string;
    balance: number;
    user: User;
}
export interface Sale {
    id: string;
    user: User;
}
