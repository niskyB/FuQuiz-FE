import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { DimensionType } from '../../../../core/models/dimension';
import { dataParser } from '../../../../core/util/data';
import { RedStar } from '../../../store';
import { EditSubject } from '../../../subject';
import { useGetDimensionById } from '../../common/hooks/useGetDimensionById';
import { useGetDimensionType } from '../../common/hooks/useGetDimensionTypes';
import { editDimension } from './action';
import { EditDimensionFormDTO } from './inteface';

interface EditDimensionProps {
    subjectId: string;
    dimensionId: string;
}
const defaultValues: EditDimensionFormDTO = {
    description: '',
    name: '',
    type: '',
};
export const EditDimension: React.FunctionComponent<EditDimensionProps> = ({ subjectId, dimensionId }) => {
    const router = useRouter();

    const methods = useForm<EditDimensionFormDTO>({ defaultValues });

    const { dimensionTypes } = useGetDimensionType();
    const { dimension } = useGetDimensionById(dimensionId);
    console.log(dimension);
    React.useEffect(() => {
        if (dimension) {
            methods.setValue('description', dimension.description);
            methods.setValue('name', dimension.name);
            methods.setValue('type', dimension.type.id);
        }

        return () => {};
    }, [dimension]);

    const _handleOnSubmit = (data: EditDimensionFormDTO) => {
        editDimension(dimensionId, data).then((res) => {
            if (res) {
                router.push(router.asPath.replace(`/edit/${dimensionId}`, ''));
                toast.success('Update dimension success!');
            }
        });
    };
    return (
        <FormWrapper methods={methods}>
            <form className="max-w-2xl space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Dimension</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new dimension in current subject</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Type <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField name="type" label="" values={dataParser<DimensionType>(dimensionTypes, 'name', 'id')} />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Name <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="name" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Description <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextareaField name="description" label="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={router.asPath.replace(`/edit/${dimensionId}`, '')} passHref>
                            <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </p>
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};
