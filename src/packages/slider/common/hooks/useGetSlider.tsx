import * as React from 'react';
import { Slider } from '../../../../core/models/slider';
import { getSliderById } from '../../containers/editSlider/action';

interface useGetSliderProps {
    id: string;
}

export const useGetSlider = ({ id }: useGetSliderProps) => {
    const [slider, setSlider] = React.useState<Slider>();
    const [imageUrl, setImageUrl] = React.useState<string>('');

    React.useEffect(() => {
        getSliderById(id).then((data) => {
            setImageUrl(data.imageUrl);
            setSlider(data);
        });
    }, [id]);

    return { slider, imageUrl, setImageUrl };
};
