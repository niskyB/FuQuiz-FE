import { User } from './user';

export interface Subject {
    id: string;
    name: string;
    tagLine: string;
    description: string;
    subjectCategory: SubjectCategory;
    thumbnailUrl: string;
    createAt: string;
    updateAt: string;
    assignTo: User;
}

export interface SubjectCategory {
    id: string;
    name: string;
}
