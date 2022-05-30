import { SelectionFieldValues } from '../interface';

export enum OrderBy {
    ASC = 'ASC',
    DESC = 'DESC',
}

export const OrderByFieldData: SelectionFieldValues<OrderBy>[] = [
    { label: 'Ascending', value: OrderBy.ASC },
    { label: 'Descending', value: OrderBy.DESC },
];
