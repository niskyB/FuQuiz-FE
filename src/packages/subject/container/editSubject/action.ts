import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { GetSubjectDTO, AdminEditSubjectFormDTO, ExpertEditSubjectFormDTO } from './interface';

export const getSubjectById = async (id: string) => {
    const res = await http.get<GetSubjectDTO>(`/subject/${id}`);
    return res.data;
};

export const expertUpdateSubject = async (id: string, data: ExpertEditSubjectFormDTO) => {
    const form = FormParser(data);
    const res = await http.put(`/subject/${id}`, form, SendFormRequestConfig());

    return res;
};

export const adminUpdateSubject = async (id: string, data: AdminEditSubjectFormDTO) => {
    const res = await http.put(`/subject/admin/${id}`, data);

    return res;
};
