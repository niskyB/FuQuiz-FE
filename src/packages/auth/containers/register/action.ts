import { http } from '../../../../core/api';
import joi from 'joi';
import { User, userSchema } from '../../../../core/models/user';

export interface AuthRegisterDto extends Pick<User, 'username' | 'password' | 'name'> {
    confirmPassword: string;
}
export const authRegisterSchema = joi.object<AuthRegisterDto>({
    username: userSchema.username,
    password: userSchema.password,
    name: userSchema.name,
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
});

export const authRegister = async (input: AuthRegisterDto) => {
    const res = await http.post('/auth/register', input);

    return res.data;
};
