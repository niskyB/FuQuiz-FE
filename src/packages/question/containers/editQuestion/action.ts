import { http } from '../../../../core/api';
import { ApiListRoutes } from '../../../../core/common/enum';
import { useGetDataById } from '../../../../core/common/hooks';
import { Question } from '../../../../core/models/question';
import { FormParser, SendFormRequestConfig } from '../../../../core/util';
import { EditQuestionForm } from './interface';

export const useGetQuestionById = (id: string) => {
    const { data: question } = useGetDataById<Question>(ApiListRoutes.QUESTION, id);
    return { question };
};

export const editQuestion = async (id: string, input: EditQuestionForm) => {
    const { answers, ...others } = input;
    const form = FormParser({ ...others, answers: JSON.stringify(answers) });
    const res = await http.put(`/question/${id}`, form, SendFormRequestConfig());

    return res;
};
