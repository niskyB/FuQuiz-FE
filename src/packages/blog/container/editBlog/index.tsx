import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { statusFieldData } from '../../../../core/common/dataField';
import { useBlogCategoriesFieldData } from '../../../../core/common/dataField/blogCategory';
import { FeatureFieldData } from '../../../../core/common/dataField/feature';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { FileField, FormWrapper, QuillInput, SelectField, TextField } from '../../../../core/components/form';
import { SelectBlogCategory } from '../../../../core/components/form/selectFieldCategory';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { routes } from '../../../../core/routes';
import { useGetBlogCategoryList } from '../../../blogCategory';
import { RedStar } from '../../../store';
import { useGetBlog } from '../../common/hooks/useGetBlog';
import { updateBlog } from './action';
import { EditBlogDTO } from './interface';

interface EditBlogProps {
    id: string;
}

const defaultValues: EditBlogDTO = {
    title: '',
    category: '',
    briefInfo: '',
    details: '',
    image: null,
    isFeature: true,
    isShow: true,
};

export const EditBlog: React.FunctionComponent<EditBlogProps> = ({ id }) => {
    const { blog } = useGetBlog(id);
    // const { categories } = useGetBlogCategoryList();
    const { blogCategoriesFieldData } = useBlogCategoriesFieldData();
    const methods = useForm<EditBlogDTO>({ defaultValues });
    const [previewThumbnailUrl, setPreviewThumbnailUrl] = React.useState<string>(blog?.thumbnailUrl || '');
    const [thumbnailFile, setThumbnailFile] = React.useState<File | null>(null);
    const [details, setDetails] = React.useState<string>('');

    React.useEffect(() => {
        if (blog) {
            methods.setValue('category', blog.category.id);
            methods.setValue('briefInfo', blog.briefInfo);
            methods.setValue('title', blog.title);
            methods.setValue('details', blog.details);
            methods.setValue('isShow', blog.isShow);
            methods.setValue('isFeature', blog.isFeature);
            setDetails(blog.details);
            setPreviewThumbnailUrl(blog.thumbnailUrl);
        }

        return () => {};
    }, [blog]);

    const _handleOnSubmit = async (data: EditBlogDTO) => {
        console.log(data);
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
                            <TextField name="title" label="Title" direction="row" />

                            <SelectField label="Category" name="category" values={[unsetFieldData, ...blogCategoriesFieldData]} direction="row" />

                            <SelectField label="Feature" name="isFeature" values={[unsetFieldData, ...FeatureFieldData]} direction="row" />

                            <TextareaField label="Brief Info" name="briefInfo" direction="row" />

                            <SelectField label="Showing" name="isShow" direction="row" values={[...statusFieldData]} />

                            <QuillInput label="Description" description={details} setDescription={setDetails} direction="row" />

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <div className="flex justify-start space-x-2">
                                    <label htmlFor="Thumbnail" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Thumbnail
                                    </label>
                                    <RedStar />
                                </div>
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
