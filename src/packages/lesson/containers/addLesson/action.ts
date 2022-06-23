import { http } from '../../../../core/api';
import { AddLessonDTO } from './interface';

export const addLesson = async (data: Omit<AddLessonDTO, 'quizType'>) => {
    console.log(data);
    const res = await http.post('/lesson', data);
    return res.data;
};
