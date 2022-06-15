import { http } from '../../../../core/api';
import { UpdateLessonActivationDTO } from './interface';

export const updateLessonActivation = async (lessonId: string, data: UpdateLessonActivationDTO) => {
    const res = await http.put(`/lesson/activation/${lessonId}`, data);
    return res;
};
