import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { AddSubjectFormDTO } from './interface';

export const addSubject = async (data: AddSubjectFormDTO) => {
    const form = FormParser(data);
    const res = await http.post('/subject', form, SendFormRequestConfig());
    return res;
};
