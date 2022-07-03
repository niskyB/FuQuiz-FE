import { http } from '../../../../core/api';
import { RegistrationStatus } from '../../../../core/models/registration';
import { urlQueryParser } from '../../../../core/util';
import { ChartData } from '../newCustomers/interface';

export interface TrendingChartStatisticsDTO {
    from: string;
    to: string;
    // status: 'SUCCESS' | 'ALL';
}

export const getTrendingStatistic = async (option: TrendingChartStatisticsDTO) => {
    const res = await http.get<ChartData[]>(`/registrations/order-trend/statistics${urlQueryParser(option)}`);

    return res.data;
};
