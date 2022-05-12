import { http } from '../../../../core/api';
import joi from 'joi';
import { User, userSchema } from '../../../../core/models/user';

export interface AuthLoginDto extends Pick<User, 'username' | 'password'> {}
export const authLoginSchema = joi.object<AuthLoginDto>({
    username: userSchema.username,
    password: userSchema.password,
});

export const authLogin = async (input: AuthLoginDto) => {
    const res = await http.post('/auth/login', input);

    return res.data;
};
