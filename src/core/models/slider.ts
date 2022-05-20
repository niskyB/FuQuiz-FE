import { Marketing } from './marketing';

export interface Slider {
    id: string;
    title: string;
    imageUrl: string;
    backLink: string;
    isShow: boolean;
    marketing: Marketing;
}

export interface SliderWithoutAuthDTO extends Omit<Slider, 'user'> {}
