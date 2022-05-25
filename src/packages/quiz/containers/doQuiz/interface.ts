import { Question } from '../../../../core/models/question';

export interface QuizQuestionDTO extends Question {
    isMarked: boolean;
    userAnswerId: string | null;
}
