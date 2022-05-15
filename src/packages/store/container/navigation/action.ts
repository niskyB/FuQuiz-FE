import { http } from '../../../../core/api';

export const logout = async () => {
    try {
        const res = await http.post('/auth/logout');
        return res;
    } catch (error) {
        return null;
    }
};
