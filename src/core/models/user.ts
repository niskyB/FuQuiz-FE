import { Role, UserRole } from './role';

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}
export const AllRole: UserRole[] = [UserRole.ADMIN, UserRole.CUSTOMER, UserRole.EXPERT, UserRole.MARKETING];

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
    createAt: string;
    updateAt: string;
    role: Role;
    imageUrl: string;
}
