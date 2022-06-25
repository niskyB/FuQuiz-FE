import { Question } from '../../../../core/models/question';

export interface QuizQuestionDTO extends Omit<Question, 'isCorrect' | 'dimension'> {
    isMarked: boolean;
    userAnswer: string | null;
}

export interface SubmitAnswerQuizDTO {
    attendedQuestionId: string;
    answerId: string[];
    isMarked: boolean;
}

export interface SubmitQuizDTO {
    data: SubmitAnswerQuizDTO[];
}
