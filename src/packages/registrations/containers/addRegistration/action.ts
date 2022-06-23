import { http } from '../../../../core/api';
import { AddRegistrationDTO } from './interface';

export const addRegistration = async (data: Omit<AddRegistrationDTO, 'subject'>) => {
    const res = await http.post('/registration', data);
    return res.data;
};
