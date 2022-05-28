interface BlogPostProps {
    id: string;
}

export const BlogPost: React.FunctionComponent<BlogPostProps> = ({ id }) => {
    return (
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
    );
};
