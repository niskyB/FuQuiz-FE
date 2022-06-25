import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util/form';

export const quizGeneration = async (id: string) => {
    const res = await http.post(`/quiz/handle/${id}`);
    return res.data;
};
