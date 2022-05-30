import { UserRole } from '../../models/role';
import { SelectionFieldValues } from '../interface';

export const roleFieldData: SelectionFieldValues<UserRole>[] = [
    { label: 'Customer', value: UserRole.CUSTOMER },
    { label: 'Expert', value: UserRole.EXPERT },
    { label: 'Marketing', value: UserRole.MARKETING },
    { label: 'Admin', value: UserRole.ADMIN },
];
