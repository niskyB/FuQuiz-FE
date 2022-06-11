import Link from 'next/link';
import React from 'react';
import { Blog } from '../../../../core/models/blog';
import { routes } from '../../../../core/routes';
import { useGetBlogList } from '../../common/hooks/useGetBlogList';
import { FilterBlogListDTO } from '../blogList/interface';
interface BlogListProps {}

export const SideBlog: React.FunctionComponent<BlogListProps> = () => {
    const blogListLatestOptions = React.useMemo<Partial<FilterBlogListDTO>>(() => ({ currentPage: 1, isShow: true, pageSize: 3 }), []);
    const { blogList } = useGetBlogList(blogListLatestOptions);
    return (
        <div className="flex flex-col space-y-5 divide-y-2">
            <h2 className="text-2xl font-semibold">Latest post</h2>
            {blogList.map((blog) => (
                <Link key={blog.id} href={`${routes.blogUrl}/${blog.id}`} passHref>
                    <div className="flex p-3 space-x-3 transition-all duration-300 bg-white rounded-md cursor-pointer h-36 hover:scale-110">
                        <img className="object-cover w-1/2 " src={blog.thumbnailUrl} />
                        <div className="">
                            <h3 className="text-lg font-medium">{blog.title}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
