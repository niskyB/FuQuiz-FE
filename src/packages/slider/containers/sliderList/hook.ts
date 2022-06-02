import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks/useGetList';
import { Slider } from '../../../../core/models/slider';
import { GetSliderOptionsDTO } from './interface';

export const useGetSliderList = (options: GetSliderOptionsDTO) => {
    const { count, list: sliders } = useGetListWithCount<Slider, GetSliderOptionsDTO>(ApiListRoutes.SLIDERS, options);
    return { sliders, count };
};
