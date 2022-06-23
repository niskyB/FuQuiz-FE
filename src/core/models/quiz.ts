import { AttributeType, SystemType } from '../common/interface';
import { Question } from './question';
import { Subject } from './subject';

export interface QuizAttribute {
    questions: Question[];
}

export interface QuizLevel extends AttributeType {}
export interface QuizType extends SystemType<string> {}

export interface Quiz extends QuizAttribute {
    id: string;
    name: string;
    subject: Pick<Subject, 'id' | 'name'>;
    level: QuizLevel;
    correctAnswer: number;
    questions: Question[];
    duration: number;
    passRate: number;
    description: string;
    createdAt: string;
    type: QuizType;
    numberOfQuestion: number;
    isPublic: boolean;
}
