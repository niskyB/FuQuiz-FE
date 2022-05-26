import { PieChart } from '../../';

interface NewRegistrationStatisticsProps {}

export const NewRegistrationStatistics: React.FunctionComponent<NewRegistrationStatisticsProps> = () => {
    return (
        <>
            <h1 className="text-xl font-bold">New registration</h1>
            <PieChart labels={['Success', 'Cancelled', 'Submitted']} series={[30, 40, 50]} />
        </>
    );
};
