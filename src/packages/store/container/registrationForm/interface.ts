import { Gender } from '../../../../core/models/user';

export interface RegistrationFormDTO {
    fullName: string;
    email: string;
    phoneNumber: string;
    gender: Gender;
    subject: string;
    pricePackage: string;
}
