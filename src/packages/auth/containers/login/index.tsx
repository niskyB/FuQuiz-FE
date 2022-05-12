import { joiResolver } from '@hookform/resolvers/joi';
import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, TextField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';

import { authLogin, AuthLoginDto, authLoginSchema } from './action';

const defaultValues: AuthLoginDto = {
    password: '',
    email: '',
};

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
    const methods = useForm<AuthLoginDto>({
        defaultValues,
        resolver: joiResolver(authLoginSchema),
    });

    const _handleOnSubmit = async (data: AuthLoginDto) => {
        const res = await authLogin(data);
    };

    return (
        <FormWrapper methods={methods}>
            <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Login</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5" action="#" method="POST">
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <FormErrorMessage />
                            <div className="flex flex-col items-end justify-center mt-1">
                                <div className="text-sm">
                                    <Link href="#">
                                        <a className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col items-center space-y-4">
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>

                                <div className="space-x-1 text-sm">
                                    <span className="">Don&apos;t have account yet?</span>
                                    <Link href={routes.registerUrl}>
                                        <a className="font-medium text-indigo-600 hover:text-indigo-500">Register here!</a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
};
