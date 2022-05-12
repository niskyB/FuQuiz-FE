import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';

export const getUserById = async (id: string): Promise<User> => {
    const res = await http.get<{ data: User }>(`/user/${id}`);
    return res.data.data;
};
