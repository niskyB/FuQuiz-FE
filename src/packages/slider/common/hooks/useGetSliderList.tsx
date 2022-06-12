import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetListWithCount } from '../../../../core/common/hooks/useGetList';
import { Slider } from '../../../../core/models/slider';
import { GetSliderOptionsDTO } from '../../containers/sliderList/interface';

export const useGetSliderList = (options: Partial<GetSliderOptionsDTO>) => {
    const { count, list: sliders } = useGetListWithCount<Slider, Partial<GetSliderOptionsDTO>>(ApiListRoutes.SLIDERS, options);
    return { sliders, count };
};
