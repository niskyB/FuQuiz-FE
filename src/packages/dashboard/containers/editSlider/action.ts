import { http } from '../../../../core/api';
import { GetSliderDTO, UpdateSliderDTO } from './interface';

export const getSliderById = async (id: string) => {
    const res = await http.get<GetSliderDTO>(`/slider/${id}`);
    return res.data;
};

export const updateSlider = async (id: string, data: UpdateSliderDTO) => {
    let form = new FormData();
    console.log(data);

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = (data as any)[key];
            form.append(key, element);
        }
    }
    const res = await http.put(`/slider/${id}`, form, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    return res;
};
