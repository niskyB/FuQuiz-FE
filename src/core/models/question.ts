import { AttributeType } from '../common/interface';
import { Answer } from './answer';
import { Dimension } from './dimension';
import { Lesson, LessonTypeEnum } from './lesson';

export interface Question {
    id: string;
    lesson: Pick<Lesson, 'id' | 'name'>;
    dimensions: Pick<Dimension, 'id' | 'name'>[];
    questionLevel: QuestionLevel;
    isActive: boolean;
    content: string;
    imageLink: string;
    videoLink: string;
    audioLink: string;
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
