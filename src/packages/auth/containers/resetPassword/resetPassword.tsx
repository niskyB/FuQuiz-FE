import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { authResetPassword, AuthResetPasswordDto } from './action';

interface ResetPasswordProps {
    token: string;
}
const defaultValues: AuthResetPasswordDto = {
    password: '',
    confirmPassword: '',
};

const ResetPassword: React.FunctionComponent<ResetPasswordProps> = ({ token }) => {
    const methods = useForm<AuthResetPasswordDto>({ defaultValues });

    const _handleOnSubmit = async (data: AuthResetPasswordDto) => {
        console.log(data);
        const res = await authResetPassword(data, token);
        console.log(res);
    };
    return (
        <FormWrapper methods={methods}>
            <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Reset password</h2>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 space-y-5 bg-white shadow sm:rounded-lg sm:px-10">
                        <p className="text-sm text-gray-500">Enter your new password here</p>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="flex flex-col items-end justify-center space-y-6">
                            <TextField label="Password" name="password" type="password" />
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />
                            <FormErrorMessage />

                            <button
                                type="submit"
                                className="flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm w-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Confirm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
};

export default ResetPassword;
