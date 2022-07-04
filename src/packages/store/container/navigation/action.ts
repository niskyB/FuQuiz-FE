import { http } from '../../../../core/api';
import { AddBalanceDTO } from './interface';

export const logout = async () => {
    try {
        const res = await http.post('/auth/logout');
        return res;
    } catch (error) {
        return null;
    }
};

export const addBalance = async (data: AddBalanceDTO) => {
    const res = await http.post<string>('/transaction', data);
    return res.data;
};
