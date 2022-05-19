import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';
import { store } from '../../../../core/store';
import { apiActions } from '../../../../core/store/api';
import { AuthSendResetDto, authSendResetPassword } from './action';

interface ResetPasswordProps {}
const defaultValues: AuthSendResetDto = {
    email: '',
};

const SendResetPassword: React.FunctionComponent<ResetPasswordProps> = () => {
    const methods = useForm<AuthSendResetDto>({ defaultValues });
    const router = useRouter();
    React.useEffect(() => {
        store.dispatch(apiActions.resetState());
        return () => {};
    }, []);
    const _handleOnSubmit = async (data: AuthSendResetDto) => {
        const res = await authSendResetPassword(data);

        if (res.status === 201) {
            methods.reset();
            store.dispatch(apiActions.resetState());
            router.push(routes.resetPasswordUrl + '/send-success');
        }
    };
    return (
        <FormWrapper methods={methods}>
            <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Reset password</h2>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 space-y-5 bg-white shadow sm:rounded-lg sm:px-10">
                        <p className="text-sm text-gray-500">If you forgot your password an email with password will be sent to you</p>
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

export default SendResetPassword;
