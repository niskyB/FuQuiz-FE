import Link from 'next/link';
import { Blog } from '../../../../core/models/blog';

interface BlogBoxProps {
    data: Blog;
}

export const BlogBox: React.FunctionComponent<BlogBoxProps> = ({ data }) => {
    return (
        <Link href={''} passHref>
            <div key={data.id} className="flex flex-col w-full overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5">
                <div className="min-w-full mx-auto bg-white">
                    <img className="object-cover h-48 py-3 mx-auto" src={data.thumbnail} alt="thumbnail" />
                </div>

                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <Link href={''}>
                                <a className="hover:underline">{data.blogCategory.name}</a>
                            </Link>
                        </p>
                        <a href={''} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">{data.title}</p>
                            <p className="mt-3 text-base text-gray-500">{data.briefInfo}</p>
                        </a>
                    </div>
                    <div className="flex items-center mt-6">
                        <div className="flex-shrink-0">
                            <div>
                                <span className="sr-only">{data.user.fullName}</span>
                                <img className="w-10 h-10 rounded-full" src={data.user.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                                <div className="hover:underline">{data.user.fullName}</div>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={data.createAt}>{data.createAt}</time>
                                <span aria-hidden="true">&middot;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
