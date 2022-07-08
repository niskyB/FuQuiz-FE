import { PieChart } from '../../';
import React from 'react';
import { getNewRegistrationStatistic } from './action';
import { RegistrationStatus } from '../../../../core/models/registration';
import { ChartData } from '../newCustomers/interface';
interface NewRegistrationStatisticsProps {}

export const NewRegistrationStatistics: React.FunctionComponent<NewRegistrationStatisticsProps> = () => {
    const [approved, setApproved] = React.useState<number>(0);
    const [cancelled, setCancelled] = React.useState<number>(0);
    const [paid, setPaid] = React.useState<number>(0);
    const [submitted, setSubmitted] = React.useState<number>(0);

    React.useEffect(() => {
        Promise.all([
            getNewRegistrationStatistic(RegistrationStatus.APPROVED),
            getNewRegistrationStatistic(RegistrationStatus.INACTIVE),
            getNewRegistrationStatistic(RegistrationStatus.PAID),
            getNewRegistrationStatistic(RegistrationStatus.SUBMITTED),
        ]).then((res) => {
            setApproved(
                res[0].reduce((total, current) => {
                    return total + current.value;
                }, 0)
            );
            setCancelled(
                res[1].reduce((total, current) => {
                    return total + current.value;
                }, 0)
            );
            setPaid(
                res[2].reduce((total, current) => {
                    return total + current.value;
                }, 0)
            );
            setSubmitted(
                res[3].reduce((total, current) => {
                    return total + current.value;
                }, 0)
            );
        });
        return () => {};
    }, []);
    return (
        <>
            <h1 className="text-xl font-bold">New registration</h1>
            <PieChart size={500} labels={['Approved', 'Submitted', 'Paid', 'Rejected']} series={[approved, submitted, paid, cancelled]} />
        </>
    );
};
