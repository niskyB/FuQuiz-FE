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
    questions: Question[];
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
    QUIZ_LESSON = 'Quiz lesson',
    TOPIC_LESSON = 'Topic subject',
    LESSON_DETAIL = 'Lesson',
}
