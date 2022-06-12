import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList, useGetListWithCount } from '../../../../core/common/hooks';
import { Blog } from '../../../../core/models/blog';
import { Lesson } from '../../../../core/models/lesson';

export const useGetLessonList = (subjectId: string) => {
    const { list: lessonList } = useGetList<Lesson, null>(ApiListRoutes.LESSONS + `/${subjectId}`);
    return { lessonList };
};
