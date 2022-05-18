import { User } from './user';

export interface Slider {
    id: string;
    title: string;
    imageUrl: string;
    backLink: string;
    isShow: boolean;
    user: User;
}

export interface SliderWithoutAuthDTO extends Omit<Slider, 'user'> {}
