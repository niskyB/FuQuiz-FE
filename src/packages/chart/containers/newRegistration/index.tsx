import { PieChart } from '../../';
import React from 'react';
import { getNewRegistrationStatistic } from './action';
import { RegistrationStatus } from '../../../../core/models/registration';
interface NewRegistrationStatisticsProps {}

export const NewRegistrationStatistics: React.FunctionComponent<NewRegistrationStatisticsProps> = () => {
    const [approved, setApproved] = React.useState<number>(1);
    const [cancelled, setCancelled] = React.useState<number>(4);
    const [paid, setPaid] = React.useState<number>(5);
    const [submitted, setSubmitted] = React.useState<number>(1);
    const [inActive, setInActive] = React.useState<number>(2);

    React.useEffect(() => {
        Promise.all([
            getNewRegistrationStatistic(RegistrationStatus.APPROVED),
            getNewRegistrationStatistic(RegistrationStatus.CANCELLED),
            getNewRegistrationStatistic(RegistrationStatus.PAID),
            getNewRegistrationStatistic(RegistrationStatus.SUBMITTED),
            getNewRegistrationStatistic(RegistrationStatus.INACTIVE),
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
            setInActive(
                res[4].reduce((total, current) => {
                    return total + current.value;
                }, 0)
            );
        });
        return () => {};
    }, []);
    return (
        <>
            <h1 className="text-xl font-bold">New registration</h1>
            <PieChart
                size={500}
                labels={['Approved', 'Submitted', 'Paid', 'Cancelled', 'Inactive']}
                series={[approved, submitted, paid, cancelled, inActive]}
            />
        </>
    );
};
