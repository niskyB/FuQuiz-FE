import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Blog } from '../../../../core/models/blog';
import { defaultCurrentUser } from '../../../../core/store/user';
import { BlogBox } from '../blogBox';

interface BlogPostProps {
    id: string;
}

export const BlogPost: React.FunctionComponent<BlogPostProps> = ({ id }) => {
    const methods = useForm();
    const blogList: Blog[] = [
        {
            id: '1',
            category: { id: '1', name: 'Learning' },
            briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
            createAt: '',
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
            createAt: '',
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
            createAt: '',
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
            createAt: '',
            details: 'details 1',
            thumbnailUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
            title: 'Giá Green Satoshi Token (GST)',
            updateAt: '',
            marketing: { user: defaultCurrentUser, id: '1' },
            isShow: true,
        },
    ];
    return (
        <div className="space-y-4">
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
            <div className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
                <article aria-labelledby={'blog-title-' + id}>
                    <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                            <img
                                className="w-10 h-10 rounded-full"
                                src={
                                    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/205956104_2751433955079159_2840020984542922686_n.jpg?stp=dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6MPUayk1XvUAX_Hz6H4&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_OjoKGlRgR7iYqVmKaEdTGUKZY-sHo8YCUcxEtVkYGsg&oe=62B04DD8'
                                }
                                alt=""
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                                <div>Dau Le Duc</div>
                            </p>
                            <p className="text-sm text-gray-500">
                                <time dateTime={''}>Today</time>
                            </p>
                            <p className="text-sm font-semibold text-indigo-600">
                                <time dateTime={''}>Crypto</time>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-10">
                        <h2 id={'blog-title-' + id} className="mt-4 text-2xl font-medium text-gray-900">
                            Gstcoin - GST là gì? Thông tin về đồng coin, tiền điện tử Gstcoin.
                        </h2>
                        <img className="mx-auto" src="https://www.stepn.com/img/coin.svg" alt="thumbnail" />
                        <div
                            className="mt-2 space-y-4 text-base text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: 'GST là một chuỗi thanh toán công cộng với niềm tin công cộng và sự tin tưởng kỹ thuật. Nó được hỗ trợ bởi công nghệ blockchain, giúp giảm đáng kể chi phí giao dịch và cải thiện hiệu quả lưu thông. Nó nhằm mục đích vượt qua nút cổ chai kỹ thuật của nền tảng thanh toán truyền thống ban đầu và nhận ra nó trong các hợp đồng thông minh blockchain.',
                            }}
                        />
                    </div>
                </article>
            </div>
            <p className="text-4xl font-semibold text-center text-gray-800">Latest Posts</p>
            <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
                {blogList.map((item) => (
                    <BlogBox key={item.id} data={item} mode="view" />
                ))}
            </div>
        </div>
    );
};
