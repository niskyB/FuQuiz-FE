import React from 'react';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetList, useGetListWithCount } from '../../../../core/common/hooks';
import { Lesson } from '../../../../core/models/lesson';
import { FilterLessonListDTO } from '../../containers/lessonList/interface';

export const useGetLessonList = (option: Partial<FilterLessonListDTO>) => {
    const { createdAt, id, isActive, title, type, updatedAt } = option;
    const options = React.useMemo<FilterLessonListDTO>(
        () => ({
            createdAt: createdAt || '',
            id: id || '',
            isActive: isActive || '',
            title: title || '',
            type: type || '',
            updatedAt: updatedAt || '',
        }),
        [createdAt, id, isActive, title, type, updatedAt]
    );
    const { list: lessonList, count } = useGetListWithCount<Lesson, Partial<FilterLessonListDTO>>(`${ApiListRoutes.LESSONS}/${options.id}`, options);

    return { lessonList, count };
};
