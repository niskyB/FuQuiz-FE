import { Question } from '../../../../core/models/question';

export interface QuizQuestionDTO extends Omit<Question, 'isCorrect' | 'dimension'> {
    isMarked: boolean;
    userAnswerId: string | null;
}
