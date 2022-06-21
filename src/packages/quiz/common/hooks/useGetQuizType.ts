import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { QuizType } from '../../../../core/models/quiz';

export const useGetQuizType = () => {
    const { list: QuizTypeList } = useGetList<QuizType, null>(ApiListRoutes.QUIZ_TYPES);
    return { QuizTypeList };
};
