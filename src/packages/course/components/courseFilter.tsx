import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { allFieldData, Order } from '../../../core/common/dataField';
import { FeatureFieldData } from '../../../core/common/dataField/feature';
import { FormWrapper, SelectField, TextField } from '../../../core/components/form';
import { BlogCategory } from '../../../core/models/blog';
import { routes } from '../../../core/routes';
import { pushWithParams } from '../../../core/util';
import { dataParser } from '../../../core/util/data';
import { useGetSubjectCategoryList } from '../../subjectCategory';
import React from 'react';
import { UserCoursesProps } from '../userCourses';
interface CourseFilterProps {
    registrationOptions: Partial<UserCoursesProps>;
}
const defaultValues: UserCoursesProps = {
    category: '',
    currentPage: 1,
    isFeature: true,
    name: '',
    pageSize: 12,
    order: Order.DESC,
    status: '',
};
export const CourseFilter: React.FunctionComponent<CourseFilterProps> = ({ registrationOptions }) => {
    const router = useRouter();

    const methods = useForm<UserCoursesProps>({
        defaultValues,
    });
    const _handleOnSubmit = (data: UserCoursesProps) => {
        pushWithParams(router, routes.courseListUrl, { ...registrationOptions, ...data });
    };

    const { categories } = useGetSubjectCategoryList();

    React.useEffect(() => {
        if (registrationOptions) {
            methods.setValue('category', registrationOptions.category || '');
            methods.setValue('isFeature', registrationOptions.isFeature || true);
            methods.setValue('order', registrationOptions.order || Order.DESC);
            methods.setValue('name', registrationOptions.name || '');
        }
        return () => {};
    }, []);

    return (
        <FormWrapper methods={methods}>
            <form
                onSubmit={methods.handleSubmit(_handleOnSubmit)}
                className="flex flex-col items-end w-full max-w-xs p-5 space-y-5 bg-white rounded-md h-fit"
            >
                <TextField label="Name" name="name" isRequire={false} />
                <SelectField
                    label="Category"
                    name="category"
                    isRequire={false}
                    values={[allFieldData, ...dataParser<BlogCategory>(categories, 'description', 'id')]}
                />
                <SelectField label="Feature" name="isFeature" isRequire={false} values={[allFieldData, ...FeatureFieldData]} />
                <SelectField
                    label="Sort"
                    name="order"
                    isRequire={false}
                    values={[
                        { label: 'Newest', value: Order.DESC },
                        { label: 'Oldest', value: Order.ASC },
                    ]}
                />

                <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Search
                </button>
            </form>
        </FormWrapper>
    );
};
