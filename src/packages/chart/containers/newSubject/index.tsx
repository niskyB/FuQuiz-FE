import { useForm } from 'react-hook-form';
import { Order } from '../../../../core/common/dataField';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { ColumnChart } from '../../components/columnChart';
import { getNewSubjectStatistic } from './action';
import { NewSubjectStatisticsDTO } from './interface';
import React from 'react';
import { ChartData } from '../newCustomers/interface';
interface NewSubjectStatisticProps {}
const defaultValues: NewSubjectStatisticsDTO = {
    sort: 'DESC',
};
export const NewSubjectStatistic: React.FunctionComponent<NewSubjectStatisticProps> = () => {
    const methods = useForm<NewSubjectStatisticsDTO>({
        defaultValues,
    });

    const [data, setData] = React.useState<ChartData[]>([
        { date: 'UNKNOWN', value: 0 },
        { date: 'UNKNOWN', value: 0 },
    ]);
    React.useEffect(() => {
        getNewSubjectStatistic().then((res) => {
            setData(res.reverse());
        });

        return () => {};
    }, []);

    const _handleOnSubmit = async (data: NewSubjectStatisticsDTO) => {};
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <h1 className="text-xl font-bold">New subjects</h1>

                <ColumnChart
                    xAxis={data.map((item) => item.date)}
                    series={[
                        {
                            name: 'New subjects',
                            data: data.map((item) => item.value),
                        },
                    ]}
                />
            </form>
        </FormWrapper>
    );
};
