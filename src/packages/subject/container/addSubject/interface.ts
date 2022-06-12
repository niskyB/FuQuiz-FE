import { Subject } from '../../../../core/models/subject';

export interface AddSubjectFormDTO extends Pick<Subject, 'name' | 'tagLine' | 'description' | 'isFeature'> {
    category: string;
    assignTo: string;
    image: File | null;
    isActive: boolean | '';
}
