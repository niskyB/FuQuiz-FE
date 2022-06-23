import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { Quiz } from '../../../../core/models/quiz';

export const useGetQuizById = (quizId: string) => {
    const { data: quiz } = useGetDataById<Quiz>(ApiListRoutes.QUIZ, quizId);

    return { quiz };
};
