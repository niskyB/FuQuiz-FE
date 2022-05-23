import { Dimension } from './dimension';
import { LessonType } from './lesson';

export interface Question {
    id: string;
    lessonType: LessonType;
    isActive: boolean;
    content: string;
    dimension: Dimension;
    answers: Answer[];
}

export interface Answer {
    id: string;
    answerContent: string;
}
