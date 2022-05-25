export enum UserRole {
    CUSTOMER = 'customer',
    MARKETING = 'marketing',
    EXPERT = 'expert',
    ADMIN = 'admin',
    SALE = 'sale',
}
export interface Role {
    id: string;
    name: UserRole | null;
}
