import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { store } from '../../../../core/store';
import { apiActions } from '../../../../core/store/api';
import { authResetPassword, AuthResetPasswordDto, authResetPasswordScheme } from './action';

interface ResetPasswordProps {}
const defaultValues: AuthResetPasswordDto = {
    email: '',
};

const ResetPassword: React.FunctionComponent<ResetPasswordProps> = () => {
    const methods = useForm<AuthResetPasswordDto>({ defaultValues, resolver: joiResolver(authResetPasswordScheme) });

    const _handleOnSubmit = async (data: AuthResetPasswordDto) => {
        store.dispatch(apiActions.setLoading({ isLoading: false }));
        const res = await authResetPassword(data);
        store.dispatch(apiActions.setLoading({ isLoading: true }));
        console.log(res);
    };
    return (
        <FormWrapper methods={methods}>
            <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Reset password</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 space-y-5 bg-white shadow sm:rounded-lg sm:px-10">
                        <form
                            onSubmit={methods.handleSubmit(_handleOnSubmit)}
                            className="flex items-center justify-center space-x-5 space-y-6"
                            action="#"
                            method="POST"
                        >
                            <TextField label="Email" name="email" />
                            <FormErrorMessage />

                            <button
                                type="submit"
                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm w-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Confirm
                            </button>
                        </form>
                        <p className="text-gray-500"> Note : input your email here</p>
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
};

export default ResetPassword;
