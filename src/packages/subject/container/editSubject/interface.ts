import { Subject } from '../../../../core/models/subject';

export interface EditSubjectDTO extends Pick<Subject, 'name' | 'tagLine' | 'description' | 'isFeature' | 'isActive'> {
    image: File | null;
    category: string;
    assignTo: string;
}

export interface AdminEditSubjectFormDTO extends Pick<EditSubjectDTO, 'assignTo' | 'isActive'> {}

export interface ExpertEditSubjectFormDTO extends Omit<EditSubjectDTO, 'assignTo' | 'isActive'> {}

export interface GetSubjectDTO extends Subject {}
