import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById, useGetList } from '../../../../core/common/hooks';
import { Lesson } from '../../../../core/models/lesson';
import { Quiz } from '../../../../core/models/quiz';
import { Subject } from '../../../../core/models/subject';

export interface LessonDetail {
    htmlContent: string;
    id: string;
    videoLink: string;
}

export interface LessonQuiz {
    htmlContent: string;
    id: string;
    quizzes: Quiz[];
}
export interface LessonResDTO extends Lesson {
    lessonDetail?: LessonDetail;
    subject: Subject;
    lessonQuiz?: LessonQuiz;
}

export const useGetLessonById = (id: string) => {
    const { data: lesson, error } = useGetDataById<LessonResDTO>(ApiListRoutes.LESSON, id);

    return { lesson, error };
};
