import { http } from '../../../../core/api';
import { AddPackageFormDTO } from './interface';

export const addBlog = async (subjectId: string, input: AddPackageFormDTO) => {
    const res = await http.post('/price-package', { ...input, subjectId });

    return res;
};
