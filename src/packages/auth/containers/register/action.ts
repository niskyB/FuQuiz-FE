import { http } from '../../../../core/api';
import { AuthRegisterDto } from './interface';

export const authRegister = async (input: AuthRegisterDto) => {
    try {
        const res = await http.post('/auth/register', input);
        return res;
    } catch (error) {
        return null;
    }
};
