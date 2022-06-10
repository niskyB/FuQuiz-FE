import Link from 'next/link';
import React from 'react';
import { Blog } from '../../../../core/models/blog';
import { routes } from '../../../../core/routes';
interface BlogListProps {
    blogList: Blog[];
}

export const SideBlog: React.FunctionComponent<BlogListProps> = ({ blogList }) => {
    return (
        <div className="flex flex-col space-y-5 divide-y-2">
            <h2 className="text-2xl font-semibold">Latest post</h2>
            {blogList.map((blog) => (
                <Link href={`${routes.blogUrl}/${blog.id}`} passHref>
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
