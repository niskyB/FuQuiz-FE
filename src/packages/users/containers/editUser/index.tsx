import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { genderFieldData } from '../../../../core/common/dataField';
import { FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { UserRole } from '../../../../core/models/role';
import { Gender, User } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { useGetUserById } from './hook';

interface EditUserProps {
    id: string;
}

const EditUser: React.FunctionComponent<EditUserProps> = ({ id }) => {
    const methods = useForm({});
    const { user } = useGetUserById(id);

    React.useEffect(() => {
        if (user) {
            methods.setValue('fullName', user.fullName);
            methods.setValue('email', user.email);
            methods.setValue('mobile', user.mobile);
            methods.setValue('role', user.role.name);
            methods.setValue('gender', user.gender);
        }
    }, [user]);

    const _handleOnSubmit = async () => {};

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Edit user</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <TextField label="Full name" name="fullName" type="fullName" />
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="phone number" name="mobile" type="text" />
                            <TextField label="New password" name="password" type="password" />
                            <TextField label="Confirm password" name="confirmPassword" type="password" />
                            <TextField label="Role" name="role" readOnly={true} />
                            <RadioField label="sex" name="gender" values={genderFieldData} />

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
                                    Edit User
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
