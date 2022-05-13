import { User } from '../../../../core/models/user';
import { http } from '../../../../core/api';

export interface UpdateUserDto extends Pick<User, 'name'> {}

export const updateUser = async (input: UpdateUserDto) => {
    const res = await http.put('/user', input);

    return res.data;
};
