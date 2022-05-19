import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';
import { store } from '../../../../core/store';
import { apiActions } from '../../../../core/store/api';
import { userChangePassword } from './action';
import { ChangePasswordDto } from './interface';

interface PasswordProps {}

const defaultValues: ChangePasswordDto = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
};

const PROFILE_FIELD = [
    { label: 'Current password', name: 'currentPassword', type: 'password' },
    { label: 'New password', name: 'newPassword', type: 'password' },
    { label: 'Confirm new password', name: 'confirmNewPassword', type: 'password' },
];

export const ChangePassword: React.FunctionComponent<PasswordProps> = () => {
    const methods = useForm<ChangePasswordDto>({ defaultValues });

    const _handleOnSubmit = async (data: ChangePasswordDto) => {
        const res = await userChangePassword(data);
        if (res) {
            toast.success('Change password success!');
            store.dispatch(apiActions.resetState());
            methods.clearErrors();
            methods.reset();
        }
    };

    return (
        <FormWrapper methods={methods}>
            <form className="flex flex-col items-center justify-center mt-10 space-y-5" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="flex flex-col w-full space-y-4 sm:max-w-4xl">
                    <div className="flex-1 space-y-5">
                        <div className="px-5 overflow-hidden bg-white shadow py-7 sm:px-8 sm:rounded-lg">
                            <div className="">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Change Password</h3>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and application.</p>
                            </div>
                            <div className="py-5 border-t border-gray-200 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    {PROFILE_FIELD.map((item) => (
                                        <div key={item.name} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
                                            <dt className="flex items-center text-sm font-medium text-gray-500">{item.label}</dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                <TextField label="" name={item.name} type={item.type} />
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                                <FormErrorMessage />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-5">
                        <Link href={routes.meUrl} passHref>
                            <p className="inline-flex items-center justify-center px-10 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Change Information
                            </p>
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-10 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};
