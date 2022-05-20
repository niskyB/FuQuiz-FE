import { AxiosResponse } from 'axios';
import { http } from '../../../../core/api';
import { Slider } from '../../../../core/models/slider';

export const getFilterSlider = async (filterUrl: string) => {
    const url = filterUrl ? `?${filterUrl}` : '';
    console.log('AS server:' + filterUrl);
    const res = await http.get('/sliders' + url);
    return res.data;
};
