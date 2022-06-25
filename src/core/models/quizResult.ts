import { string } from 'joi';
import { Question } from './question';

export interface QuizResult {
    id: string;
    rate: number;
    createdAt: string;
    attendedQuestions: QuestionQuizResult[];
}

export interface QuestionQuizResult {
    id: string;
    isMarked: boolean;
    questionInQuiz: QuestionInQuiz;
}

export interface QuestionInQuiz {
    id: string;
    question: Question;
}
