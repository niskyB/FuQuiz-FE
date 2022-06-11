import { Dimension } from '../../../../core/models/dimension';

export interface EditDimensionDTO extends Pick<Dimension, 'name' | 'description'> {
    type: string;
    subject: string;
}

export interface EditDimensionFormDTO extends Omit<EditDimensionDTO, 'subject'> {}
