import Link from 'next/link';
import { routes } from '../../../../core/routes';
import { defaultCurrentUser } from '../../../../core/store/user';
import * as React from 'react';
import {} from '../../index';
import { BlogBox } from '../blogBox';
import { Blog } from '../../../../core/models/blog';
interface BlogListProps {}
const blogData: Blog[] = [
    {
        id: '1',
        blogCategory: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        user: { ...defaultCurrentUser },
    },
    {
        id: '1',
        blogCategory: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        user: { ...defaultCurrentUser },
    },
    {
        id: '1',
        blogCategory: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        user: { ...defaultCurrentUser },
    },
    {
        id: '1',
        blogCategory: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        user: { ...defaultCurrentUser },
    },
];
export const BlogList: React.FunctionComponent<BlogListProps> = () => {
    const [blogList, setBlogList] = React.useState<Blog[]>(blogData);
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Blogs</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Blogs in home website including their title, category, info, details and thumbnail.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.adminAddBlogUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Blog
                        </p>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-8">
                {blogList.map((item) => (
                    <BlogBox key={item.id} data={item} mode="edit" />
                ))}
            </div>
        </div>
    );
};
