import { http } from '../../../../core/api';
import { GetSliderDTO } from './interface';

export const getSliderById = async (id: string) => {
    const res = await http.get<GetSliderDTO>(`/slider/${id}`);
    return res.data;
};
