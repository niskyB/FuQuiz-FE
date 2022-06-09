import { Subject } from '../../../../core/models/subject';
import { User } from '../../../../core/models/user';

export interface EditSubjectFormDTO extends Pick<Subject, 'name' | 'tagLine' | 'description'> {
    image: File | null;
}

export interface GetSubjectDTO extends Subject {}
