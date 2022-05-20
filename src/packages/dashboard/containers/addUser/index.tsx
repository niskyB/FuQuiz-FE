import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Component } from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, RadioField, TextField } from '../../../../core/components/form';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';

interface AddUserProps {}

const AddUser: React.FunctionComponent<AddUserProps> = () => {
    const router = useRouter();
    const methods = useForm({});

    const _handleOnSubmit = async () => {};

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Sign up</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <TextField label="Full name" name="fullName" type="fullName" />
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="phone number" name="mobile" type="text" />
                            <TextField label="Password" name="password" type="password" />
                            <TextField label="Confirm Password" name="confirmPassword" type="password" />
                            <RadioField
                                label="sex"
                                name="gender"
                                values={[
                                    { label: 'male', value: Gender.MALE },
                                    { label: 'female', value: Gender.FEMALE },
                                ]}
                            />

                            <FormErrorMessage />
                            <button
                                type="submit"
                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </button>

                            <div className="flex justify-end">
                                <div className="self-end mt-4 text-sm">
                                    Already have an account?
                                    <Link href={routes.loginUrl}>
                                        <a className="ml-1 font-semibold text-indigo-600 underline hover:text-indigo-500">Login</a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
