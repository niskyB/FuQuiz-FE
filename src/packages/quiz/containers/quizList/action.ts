import { http } from '../../../../core/api';

export const deleteQuiz = async (quizId: string) => {
    const res = await http.delete(`quiz/${quizId}`);
    return res;
};
