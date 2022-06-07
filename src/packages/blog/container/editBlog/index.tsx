import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FileField, FormWrapper, QuillInput, TextField } from '../../../../core/components/form';
import { SelectBlogCategory } from '../../../../core/components/form/selectFieldCategory';
import { routes } from '../../../../core/routes';
import { useGetBlogCategory } from '../../../blogCategory';
import { updateBlog } from './action';
import { useGetBlog } from './hook';
import { EditBlogDTO } from './interface';

//---------------------- Not official ----------------------------

interface EditBlogProps {
    id: string;
}

const EditBlog: React.FunctionComponent<EditBlogProps> = ({ id }) => {
    const { blog } = useGetBlog(id);
    const { categories } = useGetBlogCategory();
    const methods = useForm<EditBlogDTO>({});
    const [previewThumbnailUrl, setPreviewThumbnailUrl] = React.useState<string>(blog?.thumbnailUrl || '');
    const [thumbnailFile, setThumbnailFile] = React.useState<File | null>(null);
    const [details, setDetails] = React.useState<string>('');

    React.useEffect(() => {
        if (blog) {
            methods.setValue('briefInfo', blog.briefInfo);
            methods.setValue('title', blog.title);
            methods.setValue('category', blog.category.id);
            methods.setValue('details', blog.details);

            setDetails(blog.details);
            setPreviewThumbnailUrl(blog.thumbnailUrl);
        }
        return () => {};
    }, [blog]);

    const _handleOnSubmit = async (data: EditBlogDTO) => {
        if (thumbnailFile) data.image = thumbnailFile;
        else data.image = new File([], '');
        if (details) data.details = details;

        //call api here
        updateBlog(id, data).then((res) => {
            if (res) {
                toast.success('Update success!');
            }
        });
    };

    return (
        <FormWrapper methods={methods}>
            <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-8 divide-y divide-gray-200 ">
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
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Category
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectBlogCategory label="" name="category" values={categories} />
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
                                        name="image"
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
