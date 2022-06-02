import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks/useGetList';
import { Slider } from '../../../../core/models/slider';
import { GetSliderOptionsDTO } from './interface';

export const useGetSliderList = (options: GetSliderOptionsDTO) => {
    const { count, list: sliders } = useGetList<Slider, GetSliderOptionsDTO>(options, ApiListRoutes.SLIDERS);
    return { sliders, count };
};
