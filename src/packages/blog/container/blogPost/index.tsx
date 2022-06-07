import * as React from 'react';
import { useGetBlog } from '../../component/hooks/useGetBlog';

interface BlogPostProps {
    id: string;
}

export const BlogPost: React.FunctionComponent<BlogPostProps> = ({ id }) => {
    const { blog } = useGetBlog(id);

    if (blog)
        return (
            <div className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
                <article aria-labelledby={'blog-title-' + id}>
                    <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                            <img className="w-10 h-10 rounded-full" src={blog?.thumbnailUrl} alt={blog?.title + 'thumbnail'} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                                <div>Dau Le Duc</div>
                            </p>
                            <p className="text-sm text-gray-500">
                                <time>{new Date(blog.createdAt).toLocaleDateString()}</time>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-10">
                        <h2 id={'blog-title-' + id} className="mt-4 text-2xl font-medium text-gray-900">
                            {blog.title}
                        </h2>
                        <img className="mx-auto" src={blog.thumbnailUrl} alt="thumbnail" />
                        <div
                            className="mt-2 space-y-4 text-base text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: blog.details,
                            }}
                        />
                    </div>
                </article>
            </div>
        );
    return <></>;
};
