import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { QuestionLevel } from '../../../../core/models/question';

export const useGetQuestionLevelList = () => {
    const { list: level } = useGetList<QuestionLevel, null>(ApiListRoutes.QUESTION_LEVEL);

    return { level };
};
