import { http } from '../../../../core/api';
import { EditQuizDTO } from './interface';

export const updateQuiz = async (quizId: string, data: EditQuizDTO) => {
    const res = await http.put(`quiz/${quizId}`, data);
    return res;
};
