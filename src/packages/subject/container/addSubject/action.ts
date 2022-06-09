import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { AddSubjectDTO } from './interface';

export const addSubject = async (data: AddSubjectDTO) => {
    const form = FormParser(data);
    const res = await http.post('/subject', form, SendFormRequestConfig());
    return res;
};
