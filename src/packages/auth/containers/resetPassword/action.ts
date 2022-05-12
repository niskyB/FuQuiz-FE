import Joi from 'joi';
import { http } from '../../../../core/api';
import { User, userSchema } from '../../../../core/models/user';

export interface AuthResetPasswordDto extends Pick<User, 'email'> {}

export const authResetPasswordScheme = Joi.object<AuthResetPasswordDto>({
    email: userSchema.email,
});

export const authResetPassword = async (data: AuthResetPasswordDto) => {
    const res = await http.post('/resetPassword', data);
    return res.data;
};
