import { SelectionFieldValues } from '../interface';

export enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}

export const OrderFieldData: SelectionFieldValues<Order>[] = [
    { label: 'Ascending', value: Order.ASC },
    { label: 'Descending', value: Order.DESC },
];
