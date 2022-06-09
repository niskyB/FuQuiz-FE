import { Subject } from '../../../../core/models/subject';

export interface AddSubjectDTO extends Pick<Subject, 'name' | 'tagLine' | 'description'> {
    categoryId: string;
    assignTo: string;
    image: File | null;
}
