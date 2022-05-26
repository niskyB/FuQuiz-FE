import { useForm } from 'react-hook-form';
import { LineChart } from '../../';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { ColumnChart } from '../../components/columnChart';
import { NewSubjectStatisticsDTO } from './interface';

interface NewSubjectStatisticProps {}
const defaultValues: NewSubjectStatisticsDTO = {
    sort: 'DESC',
};
export const NewSubjectStatistic: React.FunctionComponent<NewSubjectStatisticProps> = () => {
    const methods = useForm<NewSubjectStatisticsDTO>({
        defaultValues,
    });
    const _handleOnSubmit = async (data: NewSubjectStatisticsDTO) => {};
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <h1 className="text-xl font-bold">New subjects</h1>

                <div className="flex items-end space-x-5">
                    <SelectField
                        label="Sort"
                        name="sort"
                        values={[
                            { label: 'Newest', value: 'DESC' },
                            { label: 'Oldest', value: 'ASC' },
                        ]}
                    />
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Search
                    </button>
                </div>

                <ColumnChart
                    xAxis={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
                    series={[
                        {
                            name: 'Desktops',
                            data: [25, 41, 35, 80, 49, 62, 69, 60, 100],
                        },
                    ]}
                />
            </form>
        </FormWrapper>
    );
};
