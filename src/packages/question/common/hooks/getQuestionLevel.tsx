import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { QuestionLevel } from '../../../../core/models/question';

export const useGetQuestionLevelList = () => {
    const { list: levels } = useGetList<QuestionLevel, null>(ApiListRoutes.QUESTION_LEVEL);

    return { levels };
};
