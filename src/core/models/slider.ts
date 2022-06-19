import { Marketing } from './marketing';

export interface Slider {
    createdAt: string;
    id: string;
    title: string;
    imageUrl: string;
    backLink: string;
    isShow: boolean;
    marketing: Marketing | null;
    notes: string;
}

export interface SliderWithoutAuthDTO extends Omit<Slider, 'marketing'> {}
