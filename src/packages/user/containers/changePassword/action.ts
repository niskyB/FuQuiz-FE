import Joi from 'joi';
import { http } from '../../../../core/api';
import { userSchema } from '../../../../core/models/user';

export interface ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export const changePasswordSchema = Joi.object<ChangePasswordDto>({
    currentPassword: userSchema.password,
    newPassword: userSchema.password,
    confirmNewPassword: Joi.any().required().valid(Joi.ref('newPassword')),
});

export const userChangePassword = async (input: ChangePasswordDto) => {
    const res = await http.put('/user/password', input);
    return res.data;
};
