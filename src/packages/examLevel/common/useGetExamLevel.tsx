import { ApiListRoutes } from '../../../core/common/enum';
import { useGetList } from '../../../core/common/hooks';
import { ExamLevel } from '../../../core/models/examLevel';

export const useGetExamLevel = () => {
    const { list: ExamLevelList } = useGetList<ExamLevel, null>(ApiListRoutes.EXAM_LEVELS);
    return { ExamLevelList };
};
