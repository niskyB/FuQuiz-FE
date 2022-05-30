import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../src/core/components/form';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { Blog } from '../../src/core/models/blog';
import { AllRole } from '../../src/core/models/user';
import { defaultCurrentUser } from '../../src/core/store/user';
import { BlogBox } from '../../src/packages/blog';
import { StoreLayout } from '../../src/packages/store';

interface BlogListPageProps {}
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
        marketing: { ...defaultCurrentUser },
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
        marketing: { ...defaultCurrentUser },
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
        marketing: { ...defaultCurrentUser },
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
        marketing: { ...defaultCurrentUser },
    },
];

export interface BlogListFilterDTO {
    category: string;
    content: string;
    sort: 'ASC' | 'DESC';
}
const defaultValues: BlogListFilterDTO = {
    category: '',
    content: '',
    sort: 'ASC',
};

const BlogListPage: React.FC<BlogListPageProps> = () => {
    const methods = useForm<BlogListFilterDTO>({
        defaultValues,
    });
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <h1 className="mb-5 text-2xl font-bold">New blog:</h1>
                <FormWrapper methods={methods}>
                    <div className="flex items-end p-5 space-x-5 bg-white rounded-md">
                        <SelectField
                            label="category"
                            name="category"
                            values={[
                                { label: 'category 1', value: '' },
                                { label: 'category 2', value: '' },
                                { label: 'category 3', value: '' },
                                { label: 'category 4', value: '' },
                            ]}
                        />

                        <TextField label="Content" name="content" />

                        <SelectField
                            label="Sort"
                            name="sort"
                            values={[
                                { label: 'Oldest', value: 'ASC' },
                                { label: 'Newest', value: 'DESC' },
                            ]}
                        />

                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </div>
                </FormWrapper>
                <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
                    {blogList.map((item) => (
                        <BlogBox key={item.id} data={item} mode="view" />
                    ))}
                </div>
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default BlogListPage;
