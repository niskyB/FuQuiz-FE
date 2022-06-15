import { AttributeType } from '../common/interface';
import { Answer } from './answer';
import { Dimension } from './dimension';
import { LessonTypeEnum } from './lesson';

export interface Question {
    id: string;
    subject: string;
    lesson: string;
    dimension: Dimension;
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

// export interface Answer {
//     id: string;
//     answerContent: string;
//     isCorrect: boolean;
// }
