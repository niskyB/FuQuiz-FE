import { http } from '../../../../core/api';
import { Blog } from '../../../../core/models/blog';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { EditBlogDTO } from './interface';

export const updateBlog = async (id: string, data: EditBlogDTO) => {
    const form = FormParser(data);
    const res = await http.put(`/blog/${id}`, form, SendFormRequestConfig());
    return res;
};

export const getBlog = async (id: string) => {
    const res = await http.get<Blog>(`/blog/${id}`);
    return res.data;
};
