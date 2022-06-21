import { http } from '../../../../core/api';
import { AddQuizDTO } from './interface';

export const addQuiz = async (data: AddQuizDTO) => {
    const res = await http.post('quiz', data);
    return res;
};
