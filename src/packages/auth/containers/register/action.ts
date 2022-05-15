import { http } from '../../../../core/api';
import { User } from '../../../../core/models/user';

export interface AuthRegisterDto extends Pick<User, 'email' | 'password' | 'fullName' | 'gender' | 'mobile'> {
    confirmPassword: string;
}

export const authRegister = async (input: AuthRegisterDto) => {
    try {
        const res = await http.post('/auth/register', input);
        return res;
    } catch (error) {
        return null;
    }
};
