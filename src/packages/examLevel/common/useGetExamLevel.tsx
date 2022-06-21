import { ApiListRoutes } from '../../../core/common/enum';
import { useGetList } from '../../../core/common/hooks';
import { QuizLevel } from '../../../core/models/quiz';

export const useGetExamLevel = () => {
    const { list: ExamLevelList } = useGetList<QuizLevel, null>(ApiListRoutes.EXAM_LEVELS);
    return { ExamLevelList };
};
