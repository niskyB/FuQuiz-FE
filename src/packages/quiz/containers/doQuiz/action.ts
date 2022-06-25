import { http } from '../../../../core/api';
import { SubmitAnswerQuizDTO } from './interface';

export const submitQuiz = async (data: SubmitAnswerQuizDTO[]) => {
    const res = await http.post('/quiz/submit', { data });
    return res;
};
