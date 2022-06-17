import { Order } from '../../../../core/common/dataField';

export interface BlogListFilterDTO {
    currentPage: number;
    pageSize: number;
    category: string;
    name: string;
    isFeature: boolean | '';
    order: Order;
}
