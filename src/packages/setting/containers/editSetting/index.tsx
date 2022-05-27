import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { routes } from '../../../../core/routes';

interface EditSettingProps {}

export const EditSetting: React.FunctionComponent<EditSettingProps> = () => {
    const methods = useForm({});
    React.useEffect(() => {
        methods.setValue('Type', '2');
        methods.setValue('value', 'Value 1');
        methods.setValue('order', 1);
        methods.setValue('Activation', true);
        methods.setValue('description', 'Description 1');
    }, []);

    const _handleOnSubmit = async () => {};

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Edit Setting</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <SelectField
                                label="Type"
                                name="Type"
                                values={[
                                    { label: 'Type 1', value: '1' },
                                    { label: 'Type 2', value: '2' },
                                ]}
                            />
                            <TextField label="Value" name="value" type="value" />
                            <TextField label="Order" name="order" type="order" />
                            <TextareaField label="Description" name="description" aria-rowspan={8} />
                            <SelectField
                                label="Activation"
                                name="Activation"
                                values={[
                                    { label: 'Activate', value: true },
                                    { label: 'Inactivate', value: false },
                                ]}
                            />

                            <FormErrorMessage />
                            <div className="flex space-x-2">
                                <Link href={routes.settingUrl} passHref>
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
