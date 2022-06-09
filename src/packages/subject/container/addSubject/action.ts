import { http } from '../../../../core/api';
import { AddSubjectDTO } from './interface';

export const adminAddNewUser = async (data: AddSubjectDTO) => {
    const res = await http.post('/admin/user', data);
    return res;
};
