import { useForm } from 'react-hook-form';
import { LineChart } from '../../';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { TotalRevenuesStatisticsDTO } from './action';

interface TotalRevenuesStatisticsProps {}
const defaultValues: TotalRevenuesStatisticsDTO = {
    subjectCategory: { id: '', name: '' },
};
export const TotalRevenuesStatistics: React.FunctionComponent<TotalRevenuesStatisticsProps> = () => {
    const methods = useForm<TotalRevenuesStatisticsDTO>({
        defaultValues,
    });
    const _handleOnSubmit = async (data: TotalRevenuesStatisticsDTO) => {};
    return (
        <>
            <FormWrapper methods={methods}>
                <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <h1 className="text-xl font-bold">Total revenues</h1>
                    <div className="flex items-end space-x-5">
                        <SelectField
                            label="Category"
                            name="category"
                            require={false}
                            values={[
                                { label: 'Category 1', value: '1' },
                                { label: 'Category 2', value: '2' },
                            ]}
                        />
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
                                name: 'Desktops',
                                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                            },
                        ]}
                    />
                </form>
            </FormWrapper>
        </>
    );
};
