import { AttributeType } from '../common/interface';
import { Question } from './question';
import { Subject } from './subject';

export interface LessonDetail {
    id: string;
    // lesson: Lesson;
    description: string;
    videoLink: string;
}

export interface QuizLesson {
    id: string;
    description: string;
    questions: Question[];
}

export interface SubjectTopic {
    id: string;
    name: string;
}

export interface LessonType extends AttributeType {
    attribute: LessonDetail | QuizLesson | SubjectTopic;
}

export interface Lesson {
    id: string;
    order: number;
    name: string;
    createAt: string;
    lessonType: LessonType;
    updateAt: string;
    isActive: boolean;
}
