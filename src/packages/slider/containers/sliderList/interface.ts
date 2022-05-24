import { Slider } from '../../../../core/models/slider';

export interface ListItem {
    count: number;
    data: Slider[];
}

export interface GetSliderOptionsDTO {
    currentPage?: number;
    pageSize?: number;
    title?: string;
    userId?: string;
    isShow?: boolean;
    createdAt?: Date;
    orderBy?: string;
}
