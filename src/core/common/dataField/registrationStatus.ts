import { RegistrationStatus } from '../../models/registration';
import { SelectionFieldValues } from '../interface';

export const registrationDataField: SelectionFieldValues<RegistrationStatus>[] = [
    { label: 'Submitted', value: RegistrationStatus.SUBMITTED },
    { label: 'Paid', value: RegistrationStatus.PAID },
    { label: 'Approve', value: RegistrationStatus.APPROVED },
    { label: 'Rejected', value: RegistrationStatus.CANCELLED },
];
