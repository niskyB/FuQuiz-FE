import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';

export interface FilterFieldDto extends Pick<User, 'name'> {}

export const getFilterUsers = async (filterUrl: string) => {
    const url = filterUrl ? `?${filterUrl}` : '';
    const res = await http.get('/users/search' + url);
    return res.data;
};
