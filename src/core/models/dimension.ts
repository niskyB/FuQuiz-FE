import { AttributeType } from '../common/interface';

export interface Dimension {
    id: string;
    type: DimensionType;
    name: string;
    description: string;
}

export interface DimensionType extends AttributeType {}
