import { http } from '../../../../core/api';
import { FormParser, SendFormRequestConfig } from '../../../../core/util';
import { EditQuestionForm } from './interface';

export const getQuestion = async (id: string) => {
    // const { answers, ...others } = input;
    // console.log('Form', form.getAll());

    return res;
};

export const updateQuestion = async (input: EditQuestionForm) => {
    const { answers, ...others } = input;
    const form = FormParser({ ...others, answers: JSON.stringify(answers) });
    // console.log('Form', form.getAll());
    const res = await http.post('/question', form, SendFormRequestConfig());

    return res;
};
