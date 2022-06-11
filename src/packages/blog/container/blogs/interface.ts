import { Order } from '../../../../core/common/dataField';
import { FilterBlogListDTO } from '../blogList/interface';

export interface FilterBlogsDTO extends Pick<FilterBlogListDTO, 'title' | 'category' | 'currentPage' | 'pageSize'> {
    order: Order;
}
