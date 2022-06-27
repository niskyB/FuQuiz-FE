import { http } from '../../../../core/api';
import { AddPracticeDTO } from './interface';

export const AddPracticeAction = async (data: AddPracticeDTO) => {
    const res = await http.post('/quiz/practice', data);
    return res.data;
};
