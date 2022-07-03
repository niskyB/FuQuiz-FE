import { useForm } from 'react-hook-form';
import { LineChart } from '../../';
import { DateField, FormWrapper, SelectField } from '../../../../core/components/form';
import { getTrendingStatistic, TrendingChartStatisticsDTO } from './action';
import React from 'react';
import { dateParser } from '../../../../core/util/date';
import moment from 'moment';
import { ChartData } from '../newCustomers/interface';

interface TrendingStatisticsProps {}
const defaultValues: TrendingChartStatisticsDTO = {
    from: '',
    // status: 'SUCCESS',
    to: '',
};
export const TrendingStatistics: React.FunctionComponent<TrendingStatisticsProps> = () => {
    const [data, setData] = React.useState<ChartData[]>([]);

    const methods = useForm<TrendingChartStatisticsDTO>({
        defaultValues: {
            from: dateParser(Date.now() - 7 * 24 * 3600 * 1000),
            to: dateParser(new Date().toLocaleDateString()),
        },
    });
    const _handleOnSubmit = async (data: TrendingChartStatisticsDTO) => {
        const res = await getTrendingStatistic(data);
        if (res) setData(res);
    };

    React.useEffect(() => {
        getTrendingStatistic({
            from: dateParser(Date.now() - 7 * 24 * 3600 * 1000),
            to: dateParser(new Date().toLocaleDateString()),
        }).then((res) => {
            setData(res);
        });
        return () => {};
    }, []);

    return (
        <>
            <FormWrapper methods={methods}>
                <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <h1 className="text-xl font-bold">Trending (order counts)</h1>
                    <div className="flex items-end space-x-5">
                        {/* <SelectField
                            isRequire={false}
                            label="Status"
                            name="status"
                            values={[
                                { label: 'Success', value: 'SUCCESS' },
                                { label: 'All', value: 'ALL' },
                            ]}
                        /> */}
                        <DateField isRequire={false} label="From" name="from" />
                        <DateField isRequire={false} label="To" name="to" />
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </div>
                    <LineChart data={[data]} name={['Order Counts']} />
                </form>
            </FormWrapper>
        </>
    );
};
