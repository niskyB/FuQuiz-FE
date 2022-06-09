import { http } from '../../../../core/api';
import { EditSubjectCategoryDTO } from './interface';

export const editSubjectCategory = async (id: string, data: EditSubjectCategoryDTO) => {
    const res = await http.put(`/blog-category/${id}`, data);
    return res.data;
};
