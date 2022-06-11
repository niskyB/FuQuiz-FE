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
import Contact from '../../../store/container/Contact';
import SearchBlogBar from '../../common/component/SearchBlogBar';
import { useGetBlogList } from '../../common/hooks/useGetBlogList';
import { useGetBlogs } from '../../common/hooks/useGetBlogs';
import { BlogBox } from '../blogBox';
import { FilterBlogListDTO } from '../blogList/interface';
import { SideBlog } from '../sideBlog';
import { FilterBlogsDTO } from './interface';

export interface BlogsProps extends FilterBlogsDTO {}

export const Blogs: React.FunctionComponent<BlogsProps> = ({ currentPage, pageSize, title, category, order }) => {
    const router = useRouter();

    const options = React.useMemo<FilterBlogListDTO>(
        () => ({ category, currentPage, pageSize, title, order, createdAt: '', isShow: true, userId: '' }),
        [category, currentPage, pageSize, title, order]
    );

    useUrlParams({ defaultPath: routes.blogListUrl, query: { ...router.query, currentPage, pageSize, title, category, order } });

    const { blogList, count } = useGetBlogs(options);

    return (
        <div className="flex flex-col space-y-10">
            <h1 className="mb-5 text-4xl font-bold text-center text-gray-800">New Blogs</h1>
            <div className="flex space-x-4">
                <SearchBlogBar options={{ category, currentPage, order, pageSize, title }} />
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
