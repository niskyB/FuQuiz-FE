import { http } from '../../../../core/api';
import { AddSubjectCategoryDTO } from './interface';

export const addSubjectCategory = async (data: AddSubjectCategoryDTO) => {
    const res = await http.post('/subject-category', data);
    return res.data;
};
