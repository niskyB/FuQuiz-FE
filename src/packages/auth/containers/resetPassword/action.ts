import { http } from '../../../../core/api';
import { AuthResetPasswordDto, AuthSendResetDto } from './interface';

export const authSendResetPassword = async (data: AuthSendResetDto) => {
    const res = await http.post('/auth/send-reset-password', data);
    return res;
};

export const authResetPassword = async (data: AuthResetPasswordDto, token: string) => {
    const res = await http.post('/auth/reset-password', { password: data.password, confirmPassword: data.confirmPassword, token });
    return res;
};
