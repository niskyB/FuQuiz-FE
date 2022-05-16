export enum UserRole {
    CUSTOMER = 'customer',
    MARKETING = 'marketing',
    EXPERT = 'expert',
    ADMIN = 'admin',
}
export interface Role {
    id: string;
    name: UserRole | null;
}
