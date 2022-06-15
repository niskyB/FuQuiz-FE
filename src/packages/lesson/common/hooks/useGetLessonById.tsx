import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById, useGetList } from '../../../../core/common/hooks';
import { Lesson } from '../../../../core/models/lesson';

export const useGetLessonById = (id: string) => {
    const { data: lesson } = useGetDataById<Lesson>(ApiListRoutes.LESSON, id);
    return { lesson };
};
