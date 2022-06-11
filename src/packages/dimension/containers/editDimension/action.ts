import { http } from '../../../../core/api';
import { EditDimensionFormDTO } from './inteface';

export const editDimension = async (subjectId: string, data: EditDimensionFormDTO) => {
    const res = await http.put(`/dimension/${subjectId}`, data);

    return res;
};
