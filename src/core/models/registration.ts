import { PricePackage } from './pricePackage';
import { Customer } from './user';

export enum RegistrationStatus {
    SUBMITTED = 'submitted',
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
}
