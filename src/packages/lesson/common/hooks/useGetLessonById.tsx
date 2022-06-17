import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById, useGetList } from '../../../../core/common/hooks';
import { Lesson } from '../../../../core/models/lesson';
import { Subject } from '../../../../core/models/subject';

export interface LessonDetail {
    htmlContent: string;
    id: string;
    videoLink: string;
}
export interface LessonResDTO extends Lesson {
    lessonDetail: LessonDetail;
    subject: Subject;
}

export const useGetLessonById = (id: string) => {
    const { data: lesson } = useGetDataById<LessonResDTO>(ApiListRoutes.LESSON, id);
    return { lesson };
};
