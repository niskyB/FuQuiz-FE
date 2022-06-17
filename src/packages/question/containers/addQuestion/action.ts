import { http } from '../../../../core/api';
import { FormParser } from '../../../../core/util';
import { AddQuestionForm } from './interface';

export const addQuestion = async (input: AddQuestionForm) => {
    const form = FormParser(input);
    const res = await http.post('/question', form);

    return res;
};
