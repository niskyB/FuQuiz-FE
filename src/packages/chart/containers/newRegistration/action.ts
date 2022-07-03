import { http } from '../../../../core/api';
import { RegistrationStatus } from '../../../../core/models/registration';
import { ChartData } from '../newCustomers/interface';
export const getNewRegistrationStatistic = async (option: RegistrationStatus) => {
    const res = await http.get<ChartData[]>(`/registrations/statistics?status=${option}`);

    return res.data;
};
