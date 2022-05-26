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
                        name: 'Desktops',
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                    },
                ]}
            />
        </>
    );
};
