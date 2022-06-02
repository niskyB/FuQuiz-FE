import * as React from 'react';
import { useGetList } from '../../../../core/common/hooks/useGetList';
import { Slider } from '../../../../core/models/slider';
import { getFilterSlider } from './action';
import { GetSliderOptionsDTO } from './interface';

export const useGetSliderList = (options: GetSliderOptionsDTO) => {
    // const [sliders, setSliders] = React.useState<Slider[]>([]);
    // const [count, setCount] = React.useState<number>(0);
    // React.useEffect(() => {
    //     getFilterSlider(options).then((res) => {
    //         setSliders(res.data);
    //         setCount(res.count);
    //     });
    // }, [options]);
    const { count, list: sliders } = useGetList<Slider, GetSliderOptionsDTO>(options, 'sliders');
    return { sliders, count };
};
