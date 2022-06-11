import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, Order } from '../../../../core/common/dataField';
import { useUrlParams } from '../../../../core/common/hooks/useUrlParams';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Blog, BlogCategory } from '../../../../core/models/blog';
import { routes } from '../../../../core/routes';
import { defaultCurrentUser } from '../../../../core/store/user';
import { pushWithParams } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { useGetBlogCategoryList } from '../../../blogCategory';
import { PaginationBar } from '../../../dashboard';
import { useGetBlogList } from '../../component/hooks/useGetBlogList';
import { useGetBlogs } from '../../component/hooks/useGetBlogs';
import { BlogBox } from '../blogBox';
import { FilterBlogListDTO } from '../blogList/interface';
import { SideBlog } from '../sideBlog';
import { FilterBlogsDTO } from './interface';

interface BlogsProps extends FilterBlogsDTO {}

const defaultValues: FilterBlogsDTO = {
    title: '',
    currentPage: 1,
    pageSize: 12,
    category: '',
    order: Order.ASC,
};

export const Blogs: React.FunctionComponent<BlogsProps> = ({ currentPage, pageSize, title, category, order }) => {
    const { categories } = useGetBlogCategoryList();
    const router = useRouter();

    const blogListLatestOptions = React.useMemo<Partial<FilterBlogListDTO>>(() => ({ currentPage: 1, isShow: true, pageSize: 5 }), []);
    const options = React.useMemo<FilterBlogListDTO>(
        () => ({ category, currentPage, pageSize, title, order, createdAt: '', isShow: true, userId: '' }),
        [category, currentPage, pageSize, title, order]
    );

    useUrlParams({ defaultPath: routes.blogListUrl, query: { currentPage, pageSize, title, category, order } });

    const { blogList, count } = useGetBlogs(options);
    const { blogList: latestBlogList } = useGetBlogList(blogListLatestOptions);

    const methods = useForm<FilterBlogsDTO>({
        defaultValues,
    });

    const _handleOnSubmit = async (data: FilterBlogsDTO) => {
        const { currentPage, pageSize, title, category } = options;
        pushWithParams(router, routes.blogListUrl, { ...{ currentPage, pageSize, title, category }, ...data });
    };

    return (
        <div className="flex flex-col space-y-10">
            <h1 className="mb-5 text-4xl font-bold text-center text-gray-800">New blog</h1>
            <div className="flex space-x-4">
                <div className="flex flex-col w-full max-w-sm space-y-10">
                    <FormWrapper methods={methods}>
                        <form
                            className="flex flex-col px-4 py-8 space-y-4 bg-white rounded-md h-fit"
                            onSubmit={methods.handleSubmit(_handleOnSubmit)}
                        >
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
                                    { label: 'Newest', value: Order.DESC },
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
                    <SideBlog blogList={latestBlogList} />
                </div>
                <div className="flex flex-col w-full space-y-4">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {blogList.map((item) => (
                            <BlogBox key={item.id} data={item} mode="view" />
                        ))}
                    </div>
                    <PaginationBar currentPage={currentPage} numberOfItem={count} pageSize={pageSize} routeUrl={router.asPath} />
                </div>
            </div>
        </div>
    );
};
