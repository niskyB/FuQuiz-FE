import { PricePackage } from './pricePackage';
import { Subject } from './subject';

export interface Registration {
    id: string;
    email: string;
    registrationTime: string;
    subject: Subject;
    package: PricePackage;
    totalCost: number;
    status: boolean;
    validForm: string;
    validTo: string;
}
