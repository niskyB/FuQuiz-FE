import { joiResolver } from '@hookform/resolvers/joi';
import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, RadioField, TextField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';
import { authRegister, AuthRegisterDto, authRegisterSchema } from './action';

const defaultValues: AuthRegisterDto = {
    password: '',
    email: '',
    confirmPassword: '',
    name: '',
};

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
    const methods = useForm<AuthRegisterDto>({
        defaultValues,
        resolver: joiResolver(authRegisterSchema),
    });

    const _handleOnSubmit = async (data: AuthRegisterDto) => {
        const res = await authRegister(data);
    };

    return (
        <FormWrapper methods={methods}>
            <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign up</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5" action="#" method="POST">
                            <FormErrorMessage />
                            <TextField label="Full name" name="fullName" type="fullName" />
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />
                            <RadioField
                                label="sex"
                                name="gender"
                                values={[
                                    { label: 'male', value: 'male' },
                                    { label: 'female', value: 'female' },
                                ]}
                            />
                            <div className="flex flex-col items-center space-y-4">
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Register
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <div className="self-end mt-4 text-sm">
                                    Already have an account?
                                    <Link href={routes.loginUrl}>
                                        <a className="ml-1 font-semibold text-indigo-600 underline hover:text-indigo-500">Login</a>
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
