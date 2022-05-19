import { Blog } from './interface.dto';

interface BlogPostProps {
    data: Blog;
}

export const BlogPost: React.FunctionComponent<BlogPostProps> = ({ data }) => {
    return (
        <li key={data.id} className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
            <article aria-labelledby={'blog-title-' + data.id}>
                <div>
                    <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                            <img className="w-10 h-10 rounded-full" src={data.user.imageUrl} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                                <div>{data.user.fullName}</div>
                            </p>
                            <p className="text-sm text-gray-500">
                                <time dateTime={data.createAt}>{data.createAt}</time>
                            </p>
                        </div>
                    </div>
                    <h2 id={'blog-title-' + data.id} className="mt-4 text-base font-medium text-gray-900">
                        {data.title}
                    </h2>
                </div>
                <div className="mt-2 space-y-4 text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: data.briefInfo }} />
            </article>
        </li>
    );
};
