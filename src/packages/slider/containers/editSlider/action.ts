import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { GetSliderDTO, UpdateSliderDTO } from './interface';

export const getSliderById = async (id: string) => {
    const res = await http.get<GetSliderDTO>(`/slider/${id}`);
    return res.data;
};

export const updateSlider = async (id: string, data: UpdateSliderDTO) => {
    const form = FormParser(data);
    const res = await http.put(`/slider/${id}`, form, SendFormRequestConfig());

    return res;
};
