import * as React from 'react';
import SearchBlogBar from '../../component/SearchBlogBar';
import { useGetBlog } from '../../common/hooks/useGetBlog';

interface BlogPostProps {
    id: string;
}

export const BlogPost: React.FunctionComponent<BlogPostProps> = ({ id }) => {
    const { blog } = useGetBlog(id);

    return (
        <div className="flex space-x-8">
            <SearchBlogBar />
            <div className="w-full px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
                <article aria-labelledby={'blog-title-' + id}>
                    <div className="flex justify-between">
                        <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={blog?.marketing && blog?.marketing.user ? blog.marketing.user.imageUrl : '/asset/images/default-avatar.png'}
                                    alt={blog?.title + 'thumbnail'}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900">
                                    {blog?.marketing && blog?.marketing.user ? blog.marketing.user.fullName : 'Admin'}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <time>{new Date(blog?.createdAt || '').toLocaleDateString()}</time>
                                </p>
                            </div>
                        </div>
                        <h2 className="text-lg italic text-right text-indigo-600">{blog?.category.description}</h2>
                    </div>
                    <div className="flex flex-col space-y-10">
                        <h1 id={'blog-title-' + id} className="mt-4 text-4xl font-semibold text-center text-gray-900">
                            {blog?.title}
                        </h1>
                        <img className="mx-auto" src={blog?.thumbnailUrl} alt="thumbnail" />
                        <div
                            className="mt-2 space-y-4 text-base text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: blog?.details || '',
                            }}
                        />
                    </div>
                </article>
            </div>
        </div>
    );
};
