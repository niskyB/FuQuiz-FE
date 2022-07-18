import { http } from '../../../../core/api';

export const quizGeneration = async (id: string) => {
    const res = await http.post(`/quiz/handle/${id}`);
    return res.data;
};
