import { Marketing } from './marketing';
import { User } from './user';

export interface Slider {
    id: string;
    title: string;
    imageUrl: string;
    backLink: string;
    isShow: boolean;
    marketing: Marketing;
}

export interface SliderWithoutAuthDTO extends Omit<Slider, 'user'> {}
