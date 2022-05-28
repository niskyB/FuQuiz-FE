import { http } from '../../../../core/api';
import { BlogCategory } from '../../../../core/models/blog';

export const getAllBlogCategory = async () => {
    const res = await http.get<BlogCategory[]>('/blog-categories');
    return res.data;
};
