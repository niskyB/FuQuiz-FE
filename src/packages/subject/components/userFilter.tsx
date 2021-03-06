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
import { BlogListFilterDTO } from '../container/subjects/interface';
import React from 'react';

interface UserFilterProps {
    subjectOption: any;
}

const defaultValues: BlogListFilterDTO = {
    category: '',
    currentPage: 1,
    isFeature: '',
    name: '',
    pageSize: 12,
    order: Order.DESC,
};
export const UserFilter: React.FunctionComponent<UserFilterProps> = ({ subjectOption }) => {
    const router = useRouter();

    const methods = useForm<BlogListFilterDTO>({
        defaultValues,
    });
    const _handleOnSubmit = (data: BlogListFilterDTO) => {
        pushWithParams(router, routes.subjectListUrl, { ...subjectOption, ...data });
    };
    const { categories } = useGetSubjectCategoryList();

    React.useEffect(() => {
        methods.setValue('category', subjectOption.category);
        methods.setValue('isFeature', subjectOption.isFeature);
        methods.setValue('order', subjectOption.order);
        methods.setValue('name', subjectOption.name);
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
