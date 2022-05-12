import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';

export const getMe = async () => {
    const res = await http.get<User>('/user/me');
    return res.data;
};
