import { AttributeType } from '../common/interface';
import { Question } from './question';
import { Subject } from './subject';

export interface QuizAttribute {
    questions: Question[];
}

export interface ExamLevel extends AttributeType {}
export interface QuizType extends AttributeType {}

export interface PracticeQuiz extends QuizAttribute {
    id: string;
    name: string;
    subject: Pick<Subject, 'id' | 'title'>;
    examLevel: AttributeType;
    quizLevel: QuizType;
    correctAnswer: number;
    questions: Question[];
    duration: number;
    passRate: number;
    description: string;
    createdAt: string;
}
