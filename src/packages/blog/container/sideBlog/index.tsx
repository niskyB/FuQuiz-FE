import React from 'react';
import { Order } from '../../../../core/common/dataField';
import { routes } from '../../../../core/routes';
import { SideBox } from '../../../store/components/sideBox';
import { useGetBlogList } from '../../common/hooks/useGetBlogList';
import { FilterBlogListDTO } from '../blogList/interface';
interface BlogListProps {}

export const SideBlog: React.FunctionComponent<BlogListProps> = () => {
    const blogListLatestOptions = React.useMemo<Partial<FilterBlogListDTO>>(
        () => ({ currentPage: 1, isShow: true, pageSize: 3, order: Order.DESC }),
        []
    );
    const { blogList } = useGetBlogList(blogListLatestOptions);
    return (
        <div className="flex flex-col space-y-5 divide-y-2">
            <h2 className="text-2xl font-semibold">Latest post</h2>
            <div className="flex flex-col space-y-3">
                {blogList.map((blog) => (
                    <SideBox key={blog.id} href={`${routes.blogUrl}/${blog.id}`} image={blog.thumbnailUrl} title={blog.title} />
                ))}
            </div>
        </div>
    );
};
