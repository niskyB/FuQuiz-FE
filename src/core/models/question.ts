import { SystemType } from '../common/interface';
import { Answer } from './answer';
import { Dimension } from './dimension';
import { Lesson } from './lesson';

export interface Question {
    id: string;
    lesson: Pick<Lesson, 'id' | 'name'>;
    dimensions: Pick<Dimension, 'id' | 'name'>[];
    questionLevel: QuestionLevel;
    isActive: boolean;
    content: string;
    imageUrl: string;
    videoLink: string;
    audioLink: string;
    isMultipleChoice: boolean;
    answers: Answer[];
    explanation: string;
}

export interface QuestionLevel extends SystemType<string> {}

export interface BackQuestion {
    id: string;
    // lessonType: LessonType;
    isActive: boolean;
    content: string;
    dimension: Dimension;
    answers: Answer[];
}
