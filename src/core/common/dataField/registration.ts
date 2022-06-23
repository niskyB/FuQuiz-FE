import { RegistrationStatus } from '../../models/registration';
import { SelectionFieldValues } from '../interface';

export const registrationStatusFieldData: SelectionFieldValues<RegistrationStatus>[] = [
    { label: RegistrationStatus.SUBMITTED, value: RegistrationStatus.SUBMITTED },
    { label: RegistrationStatus.PAID, value: RegistrationStatus.PAID },
    { label: RegistrationStatus.INACTIVE, value: RegistrationStatus.INACTIVE },
];
