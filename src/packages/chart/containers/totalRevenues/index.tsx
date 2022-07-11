import React from 'react';
import { useForm } from 'react-hook-form';
import { LineChart } from '../../';
import { allFieldData } from '../../../../core/common/dataField';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { dataParser } from '../../../../core/util/data';
import { useGetSubjectCategoryList } from '../../../subjectCategory';
import { ChartData } from '../newCustomers/interface';
import { getTotalRevenuesStatistics, TotalRevenuesStatisticsDTO } from './action';
interface TotalRevenuesStatisticsProps {}
const defaultValues: TotalRevenuesStatisticsDTO = {
    subjectCategory: '',
};
export const TotalRevenuesStatistics: React.FunctionComponent<TotalRevenuesStatisticsProps> = () => {
    const methods = useForm<TotalRevenuesStatisticsDTO>({
        defaultValues,
    });
    const [data, setData] = React.useState<ChartData[]>([
        { date: 'UNKNOWN', value: 0 },
        { date: 'UNKNOWN', value: 0 },
    ]);

    const { categories } = useGetSubjectCategoryList();

    const _handleOnSubmit = async (data: TotalRevenuesStatisticsDTO) => {
        getTotalRevenuesStatistics(data).then((res) => {
            setData(res.reverse());
        });
    };

    React.useEffect(() => {
        getTotalRevenuesStatistics({ subjectCategory: methods.getValues('subjectCategory') }).then((res) => {
            setData(res.reverse());
        });

        return () => {};
    }, []);
    return (
        <>
            <FormWrapper methods={methods}>
                <form className="space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <h1 className="text-xl font-bold">Total revenues</h1>
                    <div className="flex items-end space-x-5">
                        <SelectField
                            label="Subject category"
                            name="subjectCategory"
                            isRequire={false}
                            values={[allFieldData, ...dataParser(categories, 'description', 'id')]}
                        />
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
