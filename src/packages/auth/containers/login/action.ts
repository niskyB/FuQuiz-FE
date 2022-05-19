import { http } from '../../../../core/api';
import { AuthLoginDto } from './interface';

export const authLogin = async (input: AuthLoginDto) => {
    try {
        const res = await http.post('/auth/login', input);
        return res;
    } catch (error) {
        return null;
    }
};
