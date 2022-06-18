import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { statusFieldData } from '../../../../core/common/dataField';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { routes } from '../../../../core/routes';
import { RedStar } from '../../../store';
import { addBlog } from './action';
import { AddPackageFormDTO } from './interface';

interface AddPackageProps {
    subjectId: string;
}

const defaultValues: AddPackageFormDTO = {
    description: '',
    duration: 0,
    name: '',
    originalPrice: 0,
    salePrice: 0,
};

const AddPackage: React.FunctionComponent<AddPackageProps> = ({ subjectId }) => {
    const router = useRouter();

    const methods = useForm<AddPackageFormDTO>({ defaultValues });
    const _handleOnSubmit = async (data: AddPackageFormDTO) => {
        const res = await addBlog(subjectId, data);
        if (res) {
            router.push(router.asPath.replace('/add', ''));
            toast.success('Add package success!');
        }
    };

    return (
        <FormWrapper methods={methods}>
            <form className="max-w-2xl space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Package</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new package in current subject</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                                <TextField label="Name" name="name" direction="row" />

                                <TextField label="Duration" name="duration" type="number" direction="row" />

                                <TextField label="Original price" name="originalPrice" type="number" min={1} direction="row" />

                                <TextField label="Sale Price" name="salePrice" type="number" min={1} direction="row" />

                                <SelectField disabled label="Active" name="isActive" values={statusFieldData} direction="row" />

                                <TextareaField label="Description" name="description" direction="row" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={router.asPath.replace('/add', '')} passHref>
                            <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </p>
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};

export default AddPackage;
