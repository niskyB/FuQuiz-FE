import { http } from '../../../../core/api';
import { ListItem } from './interface';

export const getFilterSlider = async (filterUrl: string) => {
    const res = await http.get<ListItem>(`/sliders?${filterUrl || ''}`);
    return res.data;
};
