import { http } from '../../../../core/api';
import { UpdateUserDto } from './interface';

export const updateUser = async (data: UpdateUserDto) => {
    let { email, ...other } = data;
    let form = new FormData();

    for (const key in other) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = (data as any)[key];
            form.append(key, element);
        }
    }
    const res = await http.put('/user', form, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return res;
};
