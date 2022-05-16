import { http } from '../../../../core/api';

export const authVerifyEmail = async (token: string) => {
    const res = await http.get(`/auth/verify-email/${token}`);
    return res;
};
