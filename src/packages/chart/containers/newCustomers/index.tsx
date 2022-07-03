import { LineChart } from '../../';
import React from 'react';
import { getNewCustomerStatistic, UserStatisticOption } from './action';
import { ChartData } from './interface';
interface NewCustomerStatisticsProps {}

export const NewCustomerStatistics: React.FunctionComponent<NewCustomerStatisticsProps> = () => {
    const [newlyRegistered, setNewlyRegistered] = React.useState<ChartData[]>([]);
    const newlyRegisteredObject = React.useMemo(() => newlyRegistered.map((item) => item.value), [newlyRegistered]);

    const [newlyBought, setNewlyBought] = React.useState<ChartData[]>();
    React.useEffect(() => {
        Promise.all([getNewCustomerStatistic(UserStatisticOption.NEWLY_BOUGHT), getNewCustomerStatistic(UserStatisticOption.NEWLY_REGISTER)]).then(
            (res) => {
                if (res && res[1]) {
                    setNewlyBought(res[0]);
                    setNewlyRegistered(res[1]);
                }
            }
        );
        return () => {};
    }, []);

    return (
        <>
            <h1 className="text-xl font-bold">New customers</h1>
            <LineChart
                xAxis={newlyRegistered?.map((item) => item.date) || []}
                series={[
                    {
                        name: 'Newly bought',
                        data: newlyBought?.map((item) => item.value) || [],
                    },
                    { name: 'Newly registered', data: newlyRegisteredObject },
                ]}
            />
        </>
    );
};
