import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FileField, FormWrapper, QuillInput, TextField } from '../../../../core/components/form';
import { SelectBlogCategory } from '../../../../core/components/form/selectFieldCategory';
import { BlogCategory } from '../../../../core/models/blog';
import { routes } from '../../../../core/routes';
import { checkFileType } from '../../../../core/util/file';
import { EditBlogDTO } from './interface';

//---------------------- Not official ----------------------------

interface EditBlogProps {}

const defaultValues: EditBlogDTO = {
    blogCategoryId: '1',
    briefInfo: 'Giá Green Satoshi Token(GST). Lưu ý: Coin này không được niêm yết trên Binance để dùng trong giao dịch và dịch vụ.',
    details: 'details 1',
    thumbnail: null,
    title: 'Giá Green Satoshi Token (GST)',
};

const categories: BlogCategory[] = [
    { id: '1', name: 'category 1' },
    { id: '2', name: 'category 2' },
    { id: '3', name: 'category 3' },
];
const EditBlog: React.FunctionComponent<EditBlogProps> = () => {
    const methods = useForm<EditBlogDTO>({
        defaultValues,
    });
    const [previewThumbnailUrl, setPreviewThumbnailUrl] = React.useState<string>('https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png');
    const [thumbnailFile, setThumbnailFile] = React.useState<File | null>(null);
    const [details, setDetails] = React.useState<string>('details 1');

    const _handleOnSubmit = async (data: EditBlogDTO) => {
        if (thumbnailFile) data.thumbnail = thumbnailFile;
        if (details) data.details = details;
        console.log(data);

        //call api here
    };

    return (
        <FormWrapper methods={methods}>
            <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="p-10 space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Edit old blog</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>

                        <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Title
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name="title" />
                                </div>
                            </div>
                            <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="blogCategory" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Category
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectBlogCategory label="" name="blogCategoryId" values={categories} />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="briefInfo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Brief Info
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea
                                        {...methods.register('briefInfo')}
                                        rows={7}
                                        name="briefInfo"
                                        id="briefInfo"
                                        autoComplete="given-name"
                                        className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="details" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Details
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <QuillInput description={details} setDescription={setDetails} />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="Thumbnail" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Thumbnail
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <FileField
                                        label=""
                                        name="thumbnail"
                                        setFile={setThumbnailFile}
                                        file={thumbnailFile}
                                        previewUrl={previewThumbnailUrl}
                                        setPreviewUrl={setPreviewThumbnailUrl}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={routes.adminBlogListUrl} passHref>
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Cancel
                            </button>
                        </Link>

                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};

export default EditBlog;
