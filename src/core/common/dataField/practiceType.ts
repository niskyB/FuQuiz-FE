import { SelectionFieldValues } from '../interface';

export enum PracticeType {
    DIMENSION = 'Dimension',
    SUBJECT_TOPIC = 'Subject Topic',
}

export const PracticeTypeFieldData: SelectionFieldValues<PracticeType>[] = [
    { label: 'Dimension', value: PracticeType.DIMENSION },
    { label: 'Subject Topic', value: PracticeType.SUBJECT_TOPIC },
];
