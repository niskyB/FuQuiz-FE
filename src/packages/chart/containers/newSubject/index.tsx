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

    const [data, setData] = React.useState<ChartData[]>([]);
    React.useEffect(() => {
        getNewSubjectStatistic().then((res) => {
            setData(res);
        });

        return () => {};
    }, []);

    const _handleOnSubmit = async (data: NewSubjectStatisticsDTO) => {};
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <h1 className="text-xl font-bold">New subjects</h1>

                {/* <div className="flex items-end space-x-5">
                    <SelectField
                        label="Sort"
                        name="sort"
                        isRequire={false}
                        values={[
                            { label: 'Newest', value: Order.DESC },
                            { label: 'Oldest', value: Order.ASC },
                        ]}
                    />
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Search
                    </button>
                </div> */}

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
