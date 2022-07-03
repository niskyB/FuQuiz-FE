import { LineChart } from '../../';
import React from 'react';
import { getNewCustomerStatistic, UserStatisticOption } from './action';
import { ChartData } from './interface';
interface NewCustomerStatisticsProps {}

export const NewCustomerStatistics: React.FunctionComponent<NewCustomerStatisticsProps> = () => {
    const [newlyRegistered, setNewlyRegistered] = React.useState<ChartData[]>([]);
    const [newlyBought, setNewlyBought] = React.useState<ChartData[]>([]);

    React.useEffect(() => {
        Promise.all([getNewCustomerStatistic(UserStatisticOption.NEWLY_BOUGHT), getNewCustomerStatistic(UserStatisticOption.NEWLY_REGISTER)]).then(
            (res) => {
                setNewlyBought(res[0]);
                setNewlyRegistered(res[1]);
            }
        );
        return () => {};
    }, []);

    return (
        <>
            <h1 className="text-xl font-bold">New customers</h1>
            <LineChart name={['Newly bought', 'Newly registered']} data={[newlyBought, newlyRegistered]} />
        </>
    );
};
