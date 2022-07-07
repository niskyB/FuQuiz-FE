import { http } from '../../../../core/api';
import { SystemType } from '../../../../core/common/interface';

export interface UpdateCategoryDTO {
    name: string;
    order: number;
}

export const getSubjectCategoryById = async (id: string) => {
    const res = await http.get<SystemType<any>>(`/subject-category/${id}`);
    return res.data;
};

export const updateSubjectCategory = async (id: string, data: UpdateCategoryDTO) => {
    const res = await http.put(`/subject-category/${id}`, data);

    return res;
};

export const getPostCategoryById = async (id: string) => {
    const res = await http.get<SystemType<any>>(`/blog-category/${id}`);
    return res.data;
};

export const updatePostCategory = async (id: string, data: UpdateCategoryDTO) => {
    const res = await http.put(`/blog-category/${id}`, data);

    return res;
};
