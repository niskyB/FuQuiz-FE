import { Subject } from '../../../../core/models/subject';

export interface SelectSubject extends Pick<Subject, 'id' | 'title'> {}
