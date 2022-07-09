import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SystemType } from '../../../../core/common/interface';
import { FormErrorMessage, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { SettingEditEnum } from '../../../../core/models/setting';
import { routes } from '../../../../core/routes';
import { updateStatusBlogCategory, updateStatusSubjectCategory } from '../settingList/action';
import { getPostCategoryById, getSubjectCategoryById, updatePostCategory, updateSubjectCategory } from './action';

interface EditSettingProps {
    id: string;
    type: SettingEditEnum;
}

export const EditSetting: React.FunctionComponent<EditSettingProps> = ({ id, type }) => {
    const methods = useForm<SystemType<any>>({ defaultValues: { description: '', id: '', isActive: true, order: 0, type: '', value: '' } });

    React.useEffect(() => {
        if (type === SettingEditEnum.SUBJECT_CATEGORY) {
            getSubjectCategoryById(id).then((res) => {
                methods.setValue('type', res.type);
                methods.setValue('value', res.value);
                methods.setValue('order', res.order);
                methods.setValue('isActive', res.isActive);
                methods.setValue('description', res.description);
            });
        }
        if (type === SettingEditEnum.POST_CATEGORY) {
            getPostCategoryById(id).then((res) => {
                methods.setValue('type', res.type);
                methods.setValue('value', res.value);
                methods.setValue('order', res.order);
                methods.setValue('isActive', res.isActive);
                methods.setValue('description', res.description);
            });
        }
    }, []);

    const _handleOnSubmit = (data: SystemType<any>) => {
        const { order, description } = data;
        if (type === SettingEditEnum.SUBJECT_CATEGORY) {
            updateSubjectCategory(id, { name: description, order }).then(() => {
                toast.success('Update subject category success');
            });
        }
        if (type === SettingEditEnum.POST_CATEGORY) {
            updatePostCategory(id, { name: description, order }).then(() => {
                toast.success('Update post category success');
            });
        }
    };

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Edit Setting</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <TextField label="Type" name="type" readOnly isRequire={false} />
                            <TextField label="Value" name="value" type="value" readOnly isRequire={false} />
                            <TextField label="Order" name="order" type="order" />
                            <TextareaField label="Description" name="description" aria-rowspan={8} />
                            <SelectField
                                disabled
                                label="Activation"
                                name="isActive"
                                values={[
                                    { label: 'Activate', value: true },
                                    { label: 'Inactivate', value: false },
                                ]}
                            />

                            <FormErrorMessage />
                            <div className="flex space-x-2">
                                <Link
                                    href={
                                        type === SettingEditEnum.POST_CATEGORY ? routes.adminBlogCategoryListUrl : routes.adminSubjectCategoryListUrl
                                    }
                                    passHref
                                >
                                    <div className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Edit Setting
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};
