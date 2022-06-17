import { AttributeType } from '../common/interface';
import { Answer } from './answer';
import { Dimension } from './dimension';
import { Lesson, LessonTypeEnum } from './lesson';
import { Subject } from './subject';

export interface Question {
    id: string;
    subject: Pick<Subject, 'id' | 'name'>;
    lesson: Pick<Lesson, 'id' | 'name'>;
    dimension: Pick<Dimension, 'id' | 'name'>;
    level: QuestionLevel;
    isActive: boolean;
    content: string;
    imageUrl: string;
    videoUrl: string;
    audioUrl: string;
    isMultipleChoice: boolean;
    answers: Answer[];
    explanation: string;
}

export interface QuestionLevel extends AttributeType {}

export interface BackQuestion {
    id: string;
    // lessonType: LessonType;
    isActive: boolean;
    content: string;
    dimension: Dimension;
    answers: Answer[];
}

export interface Answer {
    id: string;
    answerContent: string;
    isCorrect: boolean;
}
