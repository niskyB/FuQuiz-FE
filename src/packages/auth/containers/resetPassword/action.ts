import Joi from 'joi';
import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';

export interface AuthSendResetDto extends Pick<User, 'email'> {}

export interface AuthResetPasswordDto extends Pick<User, 'password'> {
    confirmPassword: string;
}

export const authSendResetPassword = async (data: AuthSendResetDto) => {
    const res = await http.post('/auth/send-reset-password', data);
    return res;
};

export const authResetPassword = async (data: AuthResetPasswordDto, token: string) => {
    const res = await http.post('/auth/reset-password', { password: data.password, confirmPassword: data.confirmPassword, token });
    return res;
};
