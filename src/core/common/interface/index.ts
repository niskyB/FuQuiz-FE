export interface AttributeType {
    id: string;
    type: string;
    value: string;
    order: number;
    description: string;
    isActive: boolean;
}

export interface SystemType<T> {
    id: string;
    type: string;
    // value: string;
    order: number;
    description: T;
    isActive: boolean;
}

export interface GetListWithCount<T> {
    count: number;
    data: T[];
}

export interface SelectionFieldValues<T> {
    label: any;
    value: T;
    isSelect?: boolean;
}
