import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { GetSubjectDTO, EditSubjectFormDTO } from './interface';

export const getSubjectById = async (id: string) => {
    const res = await http.get<GetSubjectDTO>(`/subject/${id}`);
    return res.data;
};

export const updateSubject = async (id: string, data: EditSubjectFormDTO) => {
    const form = FormParser(data);
    const res = await http.put(`/subject/${id}`, form, SendFormRequestConfig());

    return res;
};
