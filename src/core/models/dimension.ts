import { AttributeType } from '../common/interface';

export interface Dimension {
    id: string;
    typeId: AttributeType;
    name: string;
    description: string;
}
