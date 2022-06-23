import { PricePackage } from './pricePackage';
import { Subject } from './subject';

export enum RegistrationStatus {
    SUBMITTED = 'submitted',
    PAID = 'paid',
    INACTIVE = 'inactive',
}

export interface Registration {
    id: string;
    email: string;
    registrationTime: string;
    subject: Subject;
    package: PricePackage;
    totalCost: number;
    status: RegistrationStatus;
    validFrom: string;
    validTo: string;
}
