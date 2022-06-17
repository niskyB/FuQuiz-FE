import { http } from '../../../../core/api';
import { EditLessonDTO } from './interface';

export const editLesson = async (lessonId: string, data: EditLessonDTO) => {
    const res = await http.put(`/lesson/${lessonId}`, data);
    return res.data;
};
