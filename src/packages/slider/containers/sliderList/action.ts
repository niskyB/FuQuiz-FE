import { http } from '../../../../core/api';
import { urlQueryParser } from '../../../../core/util';
import { GetSliderOptionsDTO, ListItem } from './interface';

export const getFilterSlider = async (options: GetSliderOptionsDTO) => {
    const res = await http.get<ListItem>(`/sliders?${urlQueryParser(options)}`);
    return res.data;
};
