import { AttributeType } from '../common/interface';
import { Question } from './question';
import { Subject } from './subject';

export interface LessonDetail {
    id: string;
    description: string;
    videoLink: string;
}

export interface QuizLesson {
    id: string;
    description: string;
}

export interface SubjectTopic extends AttributeType {}

export interface LessonAttribute {
    type: {
        id: string;
        name: LessonType;
    };
    attribute: LessonDetail | QuizLesson | SubjectTopic | null;
}

export interface Lesson {
    id: string;
    order: number;
    name: string;
    createAt: string;
    lessonAttribute: LessonAttribute;
    updateAt: string;
    isActive: boolean;
}

export enum LessonType {
    QUIZ = 'Quiz',
    SUBJECT_TOPIC = 'Subject Topic',
    LESSON = 'Lesson',
}
