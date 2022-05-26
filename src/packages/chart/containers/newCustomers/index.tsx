import { LineChart } from '../../';

interface NewCustomerStatisticsProps {}

export const NewCustomerStatistics: React.FunctionComponent<NewCustomerStatisticsProps> = () => {
    return (
        <>
            <h1 className="text-xl font-bold">New customers</h1>
            <LineChart
                xAxis={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
                series={[
                    {
                        name: 'Newly bought',
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                    },
                    { name: 'Newly registered', data: [10, 30, 50, 99, 100, 70, 40, 120, 80] },
                ]}
            />
        </>
    );
};
