import { AttributeType, SystemType } from '../common/interface';
import { Question } from './question';
import { Subject } from './subject';

export interface QuizAttribute {
    questions: Question[];
}

export interface ExamLevel extends AttributeType {}

export interface QuizType extends SystemType<string> {}

export interface PracticeQuiz extends QuizAttribute {
    id: string;
    name: string;
    subject: Pick<Subject, 'id' | 'name'>;
    examLevel: ExamLevel;
    quizLevel: QuizType;
    correctAnswer: number;
    questions: Question[];
    duration: number;
    passRate: number;
    description: string;
    createdAt: string;
}
