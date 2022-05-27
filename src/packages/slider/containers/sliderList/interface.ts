import { GetListWithCount } from '../../../../core/common/interface';
import { Slider } from '../../../../core/models/slider';

export interface ListItem extends GetListWithCount<Slider> {}

export interface GetSliderOptionsDTO {
    currentPage: number;
    pageSize: number;
    title: string;
    userId: string;
    isShow: boolean;
    createdAt: string;
    orderBy: string;
}
