import { LineChart } from '../../';

interface NewSubjectStatisticProps {}

export const NewSubjectStatistic: React.FunctionComponent<NewSubjectStatisticProps> = () => {
    return (
        <>
            <h1 className="text-xl font-bold">New subjects</h1>
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
