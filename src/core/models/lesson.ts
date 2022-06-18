import { AttributeType } from '../common/interface';

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

export interface LessonType {
    id: string;
    name: LessonTypeEnum;
}
export interface LessonAttribute {
    type: LessonType;
    attribute: LessonDetail | QuizLesson | SubjectTopic | null;
}

export interface Lesson {
    id: string;
    order: number;
    name: string;
    createdAt: string;
    lessonAttribute: LessonAttribute;
    updatedAt: string;
    isActive: boolean;
    topic: string;
    type: LessonType;
}

export enum LessonTypeEnum {
    LESSON_QUIZ = 'Lesson Quiz',
    SUBJECT_TOPIC = 'Subject Topic',
    LESSON_DETAIL = 'Lesson Detail',
}
