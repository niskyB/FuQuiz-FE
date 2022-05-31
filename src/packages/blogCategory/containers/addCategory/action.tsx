import { http } from '../../../../core/api';
import { AddBlogCategoryDTO } from './interface';

export const addBlogCategory = async (data: AddBlogCategoryDTO) => {
    const res = await http.post('/blog-category', data);
    return res.data;
};
``;
