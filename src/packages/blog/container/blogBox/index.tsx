import Link from 'next/link';
import { Blog } from '../../../../core/models/blog';
import { routes } from '../../../../core/routes';
import * as React from 'react';

interface BlogBoxProps {
    data: Blog;
    mode: 'view' | 'edit';
}

export const BlogBox: React.FunctionComponent<BlogBoxProps> = ({ data, mode }) => {
    const [redirectLink, setRedirectLink] = React.useState<string>('');
    React.useEffect(() => {
        switch (mode) {
            case 'edit':
                setRedirectLink(`${routes.adminEditBlogUrl}/${data.id}`);
                break;
            case 'view':
                setRedirectLink(`${routes.blogUrl}/${data.id}`);
                break;
        }

        return () => {};
    }, []);

    return (
        <Link href={redirectLink} passHref>
            <div key={data.id} className="flex flex-col w-full overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5">
                <div className="min-w-full mx-auto bg-white">
                    <img className="object-cover h-48 py-3 mx-auto" src={data.thumbnailUrl} alt="thumbnail" />
                </div>

                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <Link href={''}>
                                <a className="hover:underline">{data.category.name}</a>
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
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={
                                        data.marketing && data.marketing.user.imageUrl
                                            ? data.marketing.user.imageUrl
                                            : '/asset/images/default-avatar.png'
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">
                                <p className="hover:underline">{data.marketing ? data.marketing.user.fullName : 'Admin'}</p>
                            </div>
                            <div className="flex text-sm text-gray-500">
                                <time dateTime={data.createdAt}>{new Date(data.createdAt).toLocaleDateString()}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
