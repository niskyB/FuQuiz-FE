import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';
import { AddSliderDTO } from './interface';

export const addSlider = async (data: AddSliderDTO) => {
    const form = FormParser(data);
    const res = await http.post('/slider', form, SendFormRequestConfig());
    return res.data;
};
