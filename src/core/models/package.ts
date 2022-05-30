import { AttributeType } from '../common/interface';

export interface PackageSubject {
    id: string;
    name: string;
    duration: number | null;
    listPrice: number;
    salePrice: number;
    status: AttributeType;
}
