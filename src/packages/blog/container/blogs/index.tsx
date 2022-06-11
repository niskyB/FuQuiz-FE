import { useRouter } from 'next/router';
import React from 'react';
import { useUrlParams } from '../../../../core/common/hooks/useUrlParams';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';
import SearchBlogBar from '../../common/component/SearchBlogBar';
import { useGetBlogs } from '../../common/hooks/useGetBlogs';
import { BlogBox } from '../blogBox';
import { FilterBlogListDTO } from '../blogList/interface';
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
