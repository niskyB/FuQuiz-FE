import { http } from '../../../../core/api';
import { ChangePasswordDto } from './interface';

export const userChangePassword = async (input: ChangePasswordDto) => {
    try {
        const res = await http.put('/user/password', input);
        return res;
    } catch {
        return null;
    }
};
