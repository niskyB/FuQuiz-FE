import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { UpdateUserDto } from './interface';

export const updateUser = async (data: UpdateUserDto) => {
    let { email, ...other } = data;

    const form = FormParser(other);
    const res = await http.put('/user', form, SendFormRequestConfig());

    return res;
};
