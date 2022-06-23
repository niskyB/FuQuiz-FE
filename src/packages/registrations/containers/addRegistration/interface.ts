import { Registration } from '../../../../core/models/registration';

export interface AddRegistrationDTO extends Omit<Registration, 'id' | 'package' | 'subject' | 'totalCost'> {
    sale: string | null;
    pricePackage: string;
    subject: string;
}
