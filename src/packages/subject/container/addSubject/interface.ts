import { Subject } from '../../../../core/models/subject';

export interface AddSubjectFormDTO extends Pick<Subject, 'name' | 'tagLine' | 'description'> {
    category: string;
    assignTo: string;
    image: File | null;
}
