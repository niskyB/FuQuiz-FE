import { Gender } from '../../models/user';
import { SelectionFieldValues } from '../interface';

export const genderFieldData: SelectionFieldValues<Gender>[] = [
    { label: 'Male', value: Gender.MALE },
    { label: 'Female', value: Gender.FEMALE },
];
