import { Slider } from '../../../../core/models/slider';

export interface AddSliderInput extends Pick<Slider, 'backLink' | 'title'> {}

export interface AddSliderDTO extends AddSliderInput {
    image: File;
}
