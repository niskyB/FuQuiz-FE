import { http } from '../../../../core/api';
import { AddUserDTO } from './interface';

export const adminAddNewUser = async (data: AddUserDTO) => {
    const res = await http.post('/admin/user', data);
    return res;
};
