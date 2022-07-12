import { http } from '../../../../core/api';
import { ChartData } from './interface';

export enum UserStatisticOption {
    NEWLY_REGISTER = 'Newly Register',
    NEWLY_BOUGHT = 'Newly Bought',
}
export const getNewCustomerStatistic = async (option: UserStatisticOption) => {
    const res = await http.get<ChartData[]>(`/users/statistics?option=${option}`);

    return res.data;
};
