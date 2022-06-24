import { Registration } from '../../../../core/models/registration';
import { Gender } from '../../../../core/models/user';

export interface AddRegistrationDTO extends Pick<Registration, 'email' | 'registrationTime' | 'status' | 'notes'> {
    pricePackage: string;
    sale: string | null;
    validFrom: string | null;
    validTo: string | null;
    fullName: string;
    mobile: string;
    gender: Gender;
}
export interface AddRegistrationFormDTO extends AddRegistrationDTO {
    subject: string;
}
