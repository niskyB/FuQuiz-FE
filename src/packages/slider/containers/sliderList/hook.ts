import * as React from 'react';
import { Slider } from '../../../../core/models/slider';

interface useGetSliderProps {
    id: string;
}

export const useGetSlider = ({ id }: useGetSliderProps) => {
    const [slider, setSlider] = React.useState<Slider>();
    const [imageUrl, setImageUrl] = React.useState<string>('');

    React.useEffect(() => {}, [id]);

    return { slider, imageUrl, setImageUrl };
};
