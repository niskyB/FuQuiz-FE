import { Question } from './question';
import { Quiz } from './quiz';

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

export interface QuizInQuestionInQuiz extends Pick<Quiz, 'id' | 'duration' | 'isPublic' | 'name' | 'numberOfQuestion' | 'passRate'> {}
export interface QuestionInQuiz {
    id: string;
    question: Question;
    quiz: QuizInQuestionInQuiz;
}

export interface ClientQuestionInQuiz extends QuestionQuizResult {
    userAnswer: string[];
}
