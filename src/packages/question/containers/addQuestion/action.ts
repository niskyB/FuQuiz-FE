import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util';
import { AddQuestionForm } from './interface';

export const addQuestion = async (input: AddQuestionForm) => {
    const { answers, ...others } = input;
    const form = FormParser({ ...others, answers: JSON.stringify(answers) });
    const res = await http.post('/question', form, SendFormRequestConfig());

    return res;
};
