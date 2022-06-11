import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, Order } from '../../../../core/common/dataField';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Blog, BlogCategory } from '../../../../core/models/blog';
import { defaultCurrentUser } from '../../../../core/store/user';
import { dataParser } from '../../../../core/util/data';
import { useGetBlogCategoryList } from '../../../blogCategory';
import { PaginationBar } from '../../../dashboard';
import { useGetBlogList } from '../../component/hooks/useGetBlogList';
import { useGetBlogs } from '../../component/hooks/useGetBlogs';
import { BlogBox } from '../blogBox';
import { FilterBlogListDTO } from '../blogList/interface';
import { FilterBlogsDTO } from './interface';

interface BlogsProps extends FilterBlogsDTO {}

const blogList: Blog[] = [
    {
        id: '1',
        category: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createdAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        marketing: { user: defaultCurrentUser, id: '1' },
        isShow: true,
    },
    {
        id: '1',
        category: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createdAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        marketing: { user: defaultCurrentUser, id: '1' },
        isShow: true,
    },
    {
        id: '1',
        category: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createdAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        marketing: { user: defaultCurrentUser, id: '1' },
        isShow: true,
    },
    {
        id: '1',
        category: { id: '1', name: 'Learning' },
        briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
        createdAt: '',
        details: 'details 1',
        thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
        title: 'Giá Green Satoshi Token (GST)',
        updateAt: '',
        marketing: { user: defaultCurrentUser, id: '1' },
        isShow: true,
    },
];

const defaultValues: FilterBlogsDTO = {
    title: '',
    currentPage: 1,
    pageSize: 12,
    category: '',
    sort: Order.ASC,
};

const Blogs: React.FunctionComponent<BlogsProps> = ({ currentPage, pageSize, title, category, sort }) => {
    const { categories } = useGetBlogCategoryList();
    const router = useRouter();

    const options = React.useMemo<FilterBlogListDTO>(
        () => ({ category, currentPage, pageSize, title, sort, createdAt: '', isShow: true, userId: '' }),
        [category, currentPage, pageSize, title, sort]
    );
    const { blogList, count } = useGetBlogs(options);

    const methods = useForm<FilterBlogsDTO>({
        defaultValues,
    });

    return (
        <div className="flex flex-col space-y-10">
            <h1 className="mb-5 text-4xl font-bold text-center text-gray-800">New blog</h1>
            <div className="flex space-x-4">
                <FormWrapper methods={methods}>
                    <form className="flex flex-col px-4 py-8 max-w-xs w-full bg-white rounded-md space-y-4 h-fit">
                        <h2 className="font-medium text-xl">Blog Filter</h2>
                        <SelectField
                            label="Blog Category"
                            name="category"
                            values={[allFieldData, ...dataParser<BlogCategory>(categories, 'name', 'id')]}
                        />

                        <TextField label="Title" name="title" />

                        <SelectField
                            label="Sort"
                            name="sort"
                            values={[
                                { label: 'Oldest', value: Order.ASC },
                                { label: 'Newest', value: Order.DESC },
                            ]}
                        />

                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </form>
                </FormWrapper>
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

export default Blogs;
