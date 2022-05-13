import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';

export interface AuthLoginDto extends Pick<User, 'email' | 'password'> {}

export const authLogin = async (input: AuthLoginDto) => {
    const res = await http.post('/auth/login', input);

    return res.data;
};
