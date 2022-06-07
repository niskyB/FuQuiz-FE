import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';

export const getUserById = async (id: string) => {
    const res = await http.get<User>(`/admin/${id}`);
    return res;
};

export const updateUserById = async (id: string) => {};
