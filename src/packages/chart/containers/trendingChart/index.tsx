import { useForm } from 'react-hook-form';
import { LineChart } from '../../';
import { DateField, FormWrapper, SelectField } from '../../../../core/components/form';
import { TrendingChartStatisticsDTO } from './action';

interface TrendingStatisticsProps {}
const defaultValues: TrendingChartStatisticsDTO = {
    fromDate: '',
    status: 'SUCCESS',
    toDate: '',
};
export const TrendingStatistics: React.FunctionComponent<TrendingStatisticsProps> = () => {
    const methods = useForm<TrendingChartStatisticsDTO>({
        defaultValues,
    });
    const _handleOnSubmit = async (data: TrendingChartStatisticsDTO) => {};
    return (
        <>
            <FormWrapper methods={methods}>
                <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <h1 className="text-xl font-bold">Trending (order counts)</h1>
                    <div className="flex items-end space-x-5">
                        <SelectField
                            label="Status"
                            name="status"
                            values={[
                                { label: 'Success', value: 'SUCCESS' },
                                { label: 'All', value: 'ALL' },
                            ]}
                        />
                        <DateField label="From" name="fromDate" />
                        <DateField label="To" name="toDate" />
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </div>
                    <LineChart
                        xAxis={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
                        series={[
                            {
                                name: 'Order Counts',
                                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                            },
                        ]}
                    />
                </form>
            </FormWrapper>
        </>
    );
};
