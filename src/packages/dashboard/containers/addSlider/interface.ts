import { Slider } from '../../../../core/models/slider';

export interface AddSliderDTO extends Pick<Slider, 'backLink' | 'title'> {
    image: File;
}
