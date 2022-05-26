import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { AddBlogDTO } from './interface';

export const addBlog = async (input: AddBlogDTO) => {
    const form = FormParser(input);
    const res = await http.post('/blog', form, SendFormRequestConfig());

    return res;
};
