import { useForm } from 'react-hook-form';
import { LineChart } from '../../';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { dataParser } from '../../../../core/util/data';
import { useGetSubjectList } from '../../../subject';
import { getTotalRevenuesStatistics, TotalRevenuesStatisticsDTO } from './action';
import React from 'react';
import { ChartData } from '../newCustomers/interface';
interface TotalRevenuesStatisticsProps {}
const defaultValues: TotalRevenuesStatisticsDTO = {
    // subjectCategory: { id: '', description: '', isActive: true, order: '', type: '', value: '' },
    subject: '',
};
export const TotalRevenuesStatistics: React.FunctionComponent<TotalRevenuesStatisticsProps> = () => {
    const methods = useForm<TotalRevenuesStatisticsDTO>({
        defaultValues,
    });
    const [data, setData] = React.useState<ChartData[]>([]);

    const { subjects } = useGetSubjectList({ pageSize: 999 });

    const _handleOnSubmit = async (data: TotalRevenuesStatisticsDTO) => {
        getTotalRevenuesStatistics(data).then((res) => {
            setData(res);
        });
    };

    React.useEffect(() => {
        if (subjects && subjects.length > 0) {
            methods.setValue('subject', subjects[0].id);
        }
        return () => {};
    }, [subjects]);

    React.useEffect(() => {
        getTotalRevenuesStatistics({ subject: methods.getValues('subject') }).then((res) => {
            setData(res);
        });

        return () => {};
    }, []);
    return (
        <>
            <FormWrapper methods={methods}>
                <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <h1 className="text-xl font-bold">Total revenues</h1>
                    <div className="flex items-end space-x-5">
                        <SelectField label="Subject" name="subject" isRequire={false} values={dataParser(subjects, 'name', 'id')} />
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </div>
                    <LineChart name={['Revenues']} data={[data]} />
                </form>
            </FormWrapper>
        </>
    );
};
