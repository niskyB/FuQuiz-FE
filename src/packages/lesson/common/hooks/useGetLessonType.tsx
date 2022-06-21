import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { LessonType } from '../../../../core/models/lesson';
export const useGetLessonType = () => {
    const { list: lessonType } = useGetList<LessonType, null>(ApiListRoutes.LESSON_TYPES);
    return { lessonType };
};
