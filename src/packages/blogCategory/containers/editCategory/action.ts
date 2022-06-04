import { http } from '../../../../core/api';
import { EditBlogCategoryDTO } from './interface';

export const editBlogCategory = async (id: string, data: EditBlogCategoryDTO) => {
    const res = await http.put(`/blog-category/${id}`, data);
    return res.data;
};
