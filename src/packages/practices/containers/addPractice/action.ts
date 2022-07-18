import { AddPracticeDTO } from './interface';
import { http } from '../../../../core/api';

export const AddPracticeAction = async (data: AddPracticeDTO) => {
    const res = await http.post('/quiz/practice', data);
    return res.data;
};
