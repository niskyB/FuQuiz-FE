import { User } from './user';

export interface Subject {
    id: string;
    name: string;
    tagLine: string;
    description: string;
    subjectCategory: SubjectCategory;
    thumbnailUrl: string;
    createdAt: string;
    updatedAt: string;
    assignTo: User;
    isActive: boolean;
}

export interface SubjectCategory {
    id: string;
    name: string;
}
