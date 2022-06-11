import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, Order } from '../../../../core/common/dataField';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { BlogCategory } from '../../../../core/models/blog';
import { routes } from '../../../../core/routes';
import { pushWithParams } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { useGetBlogCategoryList } from '../../../blogCategory';
import Contact from '../../../store/container/Contact';
import { FilterBlogsDTO } from '../../container/blogs/interface';
import { SideBlog } from '../../container/sideBlog';

interface SearchBlogBarProps {
    options?: FilterBlogsDTO;
}

const defaultValues: FilterBlogsDTO = {
    title: '',
    currentPage: 1,
    pageSize: 12,
    category: '',
    order: Order.ASC,
};

const SearchBlogBar: React.FunctionComponent<SearchBlogBarProps> = ({ options }) => {
    const methods = useForm<FilterBlogsDTO>({
        defaultValues,
    });

    const { categories } = useGetBlogCategoryList();

    const router = useRouter();

    const _handleOnSubmit = async (data: FilterBlogsDTO) => {
        if (options) {
            const { category, currentPage, order, pageSize, title } = options;
            pushWithParams(router, routes.blogListUrl, { ...data, category, currentPage, order, pageSize, title });
            return;
        }
        pushWithParams(router, routes.blogListUrl, { ...data });
    };

    return (
        <nav className="flex flex-col w-full max-w-sm space-y-10">
            <FormWrapper methods={methods}>
                <form className="flex flex-col px-4 py-8 space-y-4 bg-white rounded-md h-fit" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                    <h2 className="text-xl font-medium">Blog Filter</h2>
                    <SelectField
                        label="Blog Category"
                        name="category"
                        values={[allFieldData, ...dataParser<BlogCategory>(categories, 'name', 'id')]}
                    />

                    <TextField label="Title" name="title" />

                    <SelectField
                        label="Sort"
                        name="order"
                        values={[
                            { label: 'Newest', value: Order.DESC, isSelect: true },
                            { label: 'Oldest', value: Order.ASC },
                        ]}
                    />

                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Search
                    </button>
                </form>
            </FormWrapper>
            <SideBlog />
            <Contact />
        </nav>
    );
};

export default SearchBlogBar;
