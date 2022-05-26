import { SubjectCategory } from '../../../../core/models/subject';

export interface AddSubjectFormDTO {
    title: string;
    category: SubjectCategory;
}
