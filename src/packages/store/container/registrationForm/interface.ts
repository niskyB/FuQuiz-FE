import { AddRegistrationDTO } from '../../../registrations/containers/addRegistration/interface';

export interface RegistrationFormDTO extends Pick<AddRegistrationDTO, 'fullName' | 'email' | 'mobile' | 'gender' | 'pricePackage' | 'notes'> {
    subject: string;
}

export interface EditRegistrationFormDTO {
    pricePackage: string;
    notes: string;
}
