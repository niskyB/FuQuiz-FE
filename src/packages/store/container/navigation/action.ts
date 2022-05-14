import { http } from '../../../../core/api';

export const logout = async () => {
    const res = await http.post('/auth/logout');
    return res;
};
