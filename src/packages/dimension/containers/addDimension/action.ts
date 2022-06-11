import { http } from '../../../../core/api';
import { AddDimensionDTO } from './interface';

export const addDimension = async (data: AddDimensionDTO) => {
    const res = await http.post('/dimension', data);

    return res;
};
