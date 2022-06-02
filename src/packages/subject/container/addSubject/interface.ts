import { Subject } from '../../../../core/models/subject';

export interface AddSubjectDTO extends Pick<Subject, 'name' | 'tagLine' | 'description'> {
    category: string;
    assignTo: string;
    image: File | null;
}
