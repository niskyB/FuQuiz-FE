import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';
import { UpdateStatusDTO, UpdateUserRoleDTO } from './interface';

export const getUserById = async (id: string) => {
    const res = await http.get<User>(`/admin/${id}`);
    return res;
};

export const updateUserStatus = async (id: string, data: UpdateStatusDTO) => {
    const res = await http.put(`/admin/user/status/${id}`, data);
    return res;
};

export const updateUserRole = async (id: string, data: UpdateUserRoleDTO) => {
    const res = await http.put(`/admin/user/role/${id}`, data);
    return res;
};
