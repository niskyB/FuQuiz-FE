import { Question } from './question';
import { Quiz, QuizLevel } from './quiz';

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
    userAnswers: string[];
}

export interface QuizInQuestionInQuiz extends Pick<Quiz, 'id' | 'duration' | 'isPublic' | 'name' | 'numberOfQuestion' | 'passRate'> {
    level?: QuizLevel;
}

export interface QuestionInQuiz {
    id: string;
    question: Question;
    quiz: QuizInQuestionInQuiz;
}

export interface ClientQuestionInQuiz extends Omit<QuestionQuizResult, 'userAnswers'> {
    userAnswers: string[];
}
