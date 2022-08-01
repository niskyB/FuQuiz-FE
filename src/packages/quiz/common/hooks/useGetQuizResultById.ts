import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { QuizResult } from '../../../../core/models/quizResult';

export const useGetQuizResultById = (quizId: string) => {
    const { data: quiz, error } = useGetDataById<QuizResult>(ApiListRoutes.QUIZ_RESULT, quizId);

    return { quiz, error };
};
