import { User } from '../../models/user';
import { SelectionFieldValues } from '../interface';

export const userOrderFieldData: SelectionFieldValues<keyof User>[] = [
    { label: 'Create At', value: 'createdAt' },
    { label: 'Email', value: 'email' },
    { label: 'Full name', value: 'fullName' },
    { label: 'Gender', value: 'gender' },
    { label: 'Id', value: 'id' },
    { label: 'Image url', value: 'imageUrl' },
    { label: 'Active', value: 'isActive' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Update at', value: 'updateAt' },
    { label: 'Password', value: 'password' },
    { label: 'Role', value: 'role' },
    { label: 'Token', value: 'token' },
    { label: 'Type id', value: 'typeId' },
];
