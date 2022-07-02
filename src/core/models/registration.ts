import { PricePackage } from './pricePackage';
import { Customer, Sale } from './user';

export enum RegistrationStatus {
    SUBMITTED = 'submitted',
    APPROVED = 'approved',
    PAID = 'paid',
    INACTIVE = 'inactive',
}

export interface Registration {
    id: string;
    email: string;
    registrationTime: string;
    customer: Customer;
    pricePackage: PricePackage;
    totalCost: number;
    status: RegistrationStatus;
    validFrom: string;
    validTo: string;
    notes: string;
    sale: Sale | null;
    lastUpdatedBy: string;
}
