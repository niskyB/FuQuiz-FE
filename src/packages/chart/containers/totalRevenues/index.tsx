import { LineChart } from '../../';

interface TotalRevenuesStatisticsProps {}

export const TotalRevenuesStatistics: React.FunctionComponent<TotalRevenuesStatisticsProps> = () => {
    return (
        <>
            <h1 className="text-xl font-bold">Total revenues</h1>
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
