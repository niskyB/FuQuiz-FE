import React from 'react';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList } from '../../../../core/common/hooks';
import { Lesson } from '../../../../core/models/lesson';

interface LessonRenderOptions {
    subjectId: string;
}

export const useGetLessonList = (subjectId: string) => {
    const options = React.useMemo<LessonRenderOptions>(() => ({ subjectId }), [subjectId]);
    const { list: lessonList } = useGetList<Lesson, LessonRenderOptions>(ApiListRoutes.LESSONS + `/${subjectId.trim()}`, options);
    return { lessonList };
};
