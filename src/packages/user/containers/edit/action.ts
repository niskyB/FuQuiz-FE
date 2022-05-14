import { User } from '../../../../core/models/user';
import { http } from '../../../../core/api';

export interface UpdateUserDto extends Pick<User, 'fullName' | 'gender' | 'mobile' | 'email' | 'imageUrl'> {}

export const updateUser = async (input: UpdateUserDto) => {
    const res = await http.put('/user', input);

    return res.data;
};
