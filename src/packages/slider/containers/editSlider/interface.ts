import { Slider } from '../../../../core/models/slider';

export interface UpdateSliderInput extends Pick<Slider, 'backLink' | 'title' | 'isShow' | 'notes'> {}

export interface GetSliderDTO extends Omit<Slider, 'user'> {}

export interface UpdateSliderDTO extends UpdateSliderInput {
    image: File;
}
