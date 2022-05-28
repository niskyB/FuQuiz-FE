import { GetListWithCount } from '../../../../core/common/interface';
import { Blog } from '../../../../core/models/blog';

export interface FilterBlogListDTO {
    title: string;
    isShow: boolean;
    userId: string;
    category: string;
    currentPage: number;
    pageSize: number;
    createdAt: string;
}

export interface FilterBlogListFormDTO extends Pick<FilterBlogListDTO, 'title' | 'category' | 'createdAt'> {}

export interface GetListBlogWithCount extends GetListWithCount<Blog> {}
