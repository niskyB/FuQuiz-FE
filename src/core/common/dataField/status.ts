import { SelectionFieldValues } from '../interface';

export const statusFieldData: SelectionFieldValues<boolean>[] = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
];
export const publicFieldData: SelectionFieldValues<boolean>[] = [
    { label: 'Public', value: true },
    { label: 'Unpublic', value: false },
];
