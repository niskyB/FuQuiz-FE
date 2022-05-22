import { http } from '../../../../core/api';
import { Slider } from '../../../../core/models/slider';

interface ListItem {
    count: number;
    data: Slider[];
}

export const getFilterSlider = async (filterUrl: string) => {
    const url = filterUrl ? `?${filterUrl}` : '';
    const res = await http.get<ListItem>('/sliders' + url);
    return res.data;
};
