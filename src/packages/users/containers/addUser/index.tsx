import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { UserRole } from '../../../../core/models/role';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';

interface AddUserProps {}

const AddUser: React.FunctionComponent<AddUserProps> = () => {
    const methods = useForm({});

    const _handleOnSubmit = async () => {};

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Add user</h2>
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
                            <SelectField
                                label="Role"
                                name="role"
                                values={[
                                    { label: 'Customer', value: UserRole.CUSTOMER },
                                    { label: 'Admin', value: UserRole.ADMIN },
                                    { label: 'Expert', value: UserRole.EXPERT },
                                    { label: 'Marketing', value: UserRole.MARKETING },
                                ]}
                            />
                            <RadioField
                                label="sex"
                                name="gender"
                                values={[
                                    { label: 'Male', value: Gender.MALE },
                                    { label: 'Female', value: Gender.FEMALE },
                                ]}
                            />

                            <FormErrorMessage />
                            <div className="flex space-x-2">
                                <Link href={routes.adminUsersUrl}>
                                    <div className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
