import { User } from './user';

export interface Subject {
    id: string;
    name: string;
    tagLine: string;
    description: string;
    category: SubjectCategory;
    thumbnailUrl: string;
    createdAt: string;
    updatedAt: string;
    assignTo: AssignTo;
    isActive: boolean;
    isFeature: boolean;
}

export interface AssignTo {
    id: string;
    user: User;
}

export interface SubjectCategory {
    id: string;
    type: string;
    isActive: boolean;
    order: string;
    value: string;
    description: string;
}
