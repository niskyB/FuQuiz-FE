import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, TextField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';
import { useGetSubjectCategoryById } from '../../common/hooks/useGetSubjectCategoryById';
import { editSubjectCategory } from './action';
import { EditSubjectCategoryDTO } from './interface';

interface EditSubjectCategoryProps {
    id: string;
}

const EditSubjectCategory: React.FunctionComponent<EditSubjectCategoryProps> = ({ id }) => {
    const methods = useForm<EditSubjectCategoryDTO>();
    const router = useRouter();
    const { category } = useGetSubjectCategoryById(id);

    const _handleOnSubmit = async (data: EditSubjectCategoryDTO) => {
        const res = await editSubjectCategory(id, data);

        if (res) {
            router.push(routes.adminSubjectCategoryListUrl);
            toast.success('Edit category subject success!');
        }
    };

    React.useEffect(() => {
        console.log(category);
        if (category) methods.setValue('name', category.name);
        return () => {};
    }, [category]);

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Edit subject category</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <TextField label="Name" name="name" type="text" />

                            <div className="flex space-x-2">
                                <Link href={routes.adminSubjectCategoryListUrl} passHref>
                                    <div className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Edit
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default EditSubjectCategory;
