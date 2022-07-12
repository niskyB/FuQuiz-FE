import { http } from '../../../../core/api';

export interface UpdateStatusDTO {
    isActive: boolean;
}

export const updateStatusSubjectCategory = async (id: string, data: UpdateStatusDTO) => {
    const res = await http.put(`/subject-category/isActive/${id}`, data);

    return res;
};
export const updateStatusBlogCategory = async (id: string, data: UpdateStatusDTO) => {
    const res = await http.put(`/blog-category/isActive/${id}`, data);

    return res;
};
