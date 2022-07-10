import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { UpdateUserDto } from './interface';

export const updateUser = async (data: UpdateUserDto) => {
    const { email, ...others } = data;

    const form = FormParser(others);
    const res = await http.put('/user', form, SendFormRequestConfig());

    return res;
};
