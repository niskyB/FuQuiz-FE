import { Dimension } from '../../../../core/models/dimension';

export interface AddDimensionDTO extends Pick<Dimension, 'name' | 'description'> {
    type: string;
    subject: string;
}

export interface AddDimensionFormDTO extends Omit<AddDimensionDTO, 'subject'> {}
