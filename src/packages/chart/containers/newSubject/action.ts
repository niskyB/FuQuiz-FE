import { http } from '../../../../core/api';
import { ChartData } from '../newCustomers/interface';

export const getNewSubjectStatistic = async () => {
    const res = await http.get<ChartData[]>(`/subjects/statistics`);
    return res.data;
};
