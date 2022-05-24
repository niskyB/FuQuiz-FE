import * as React from 'react';
import { Slider } from '../../../../core/models/slider';
import { getFilterSlider } from './action';
import { GetSliderOptionsDTO } from './interface';

export const useGetSliderList = (options: GetSliderOptionsDTO) => {
    const [sliders, setSliders] = React.useState<Slider[]>([]);
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {
        getFilterSlider(options).then((res) => {
            setSliders(res.data);
            setCount(res.count);
        });
    }, [options]);

    return { sliders, count };
};
