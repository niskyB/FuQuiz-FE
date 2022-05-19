import { http } from '../../../../core/api';
import { AddSliderDTO } from './interface';

export const addSlider = async (data: AddSliderDTO) => {
    let form = new FormData();

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = (data as any)[key];
            form.append(key, element);
        }
    }

    const res = await http.post('/slider', form, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return res.data;
};
