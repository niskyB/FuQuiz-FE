import { Subject } from '../../../../core/models/subject';

export interface SubjectFilterDTO extends Pick<Subject, 'name' | 'createdAt'> {
    isActive: Boolean | '';
    category: string;
    currentPage: number;
    pageSize: number;
}

export interface SubjectFilterFormDTO extends Omit<SubjectFilterDTO, 'currentPage' | 'pageSize'> {}
