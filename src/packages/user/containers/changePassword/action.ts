import { http } from '../../../../core/api';

export interface ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export const userChangePassword = async (input: ChangePasswordDto) => {
    const res = await http.put('/user/password', input);
    return res.data;
};
