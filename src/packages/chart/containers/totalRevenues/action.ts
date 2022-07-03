import { http } from '../../../../core/api';
import { SubjectCategory } from '../../../../core/models/subject';
import { urlQueryParser } from '../../../../core/util';
import { ChartData } from '../newCustomers/interface';

export interface TotalRevenuesStatisticsDTO {
    // subjectCategory: SubjectCategory;
    subject: string;
}

export const getTotalRevenuesStatistics = async (option: TotalRevenuesStatisticsDTO) => {
    const res = await http.get<ChartData[]>(`/registrations/revenues/statistics${urlQueryParser(option)}`);

    return res.data;
};
