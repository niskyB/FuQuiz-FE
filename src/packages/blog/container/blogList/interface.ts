import { Order } from '../../../../core/common/dataField';
import { GetListWithCount } from '../../../../core/common/interface';
import { Blog } from '../../../../core/models/blog';

export interface FilterBlogListDTO {
    order: Order;
    title: string;
    isShow: boolean;
    userId: string;
    category: string;
    currentPage: number;
    pageSize: number;
    createdAt: string;
}

export interface FilterBlogListFormDTO extends Pick<FilterBlogListDTO, 'title' | 'category' | 'createdAt' | 'isShow'> {}

export interface GetListBlogWithCount extends GetListWithCount<Blog> {}
