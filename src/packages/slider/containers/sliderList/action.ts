import { http } from '../../../../core/api';
import { GetSliderOptionsDTO, ListItem } from './interface';

export const getFilterSlider = async ({ createdAt: createdAt, currentPage, isShow, orderBy, pageSize, title, userId }: GetSliderOptionsDTO) => {
    const res = await http.get<ListItem>(
        `/sliders?currentPage=${
            currentPage - 1
        }&pageSize=${pageSize}&title=${title}&userId=${userId}&isShow=${isShow}&orderBy=${orderBy}&createdAt=${createdAt}`
    );
    return res.data;
};
