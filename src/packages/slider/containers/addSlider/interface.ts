import { Slider } from '../../../../core/models/slider';

export interface AddSliderInput extends Pick<Slider, 'backLink' | 'title' | 'isShow'> {}

export interface AddSliderDTO extends AddSliderInput {
    image: File;
}
