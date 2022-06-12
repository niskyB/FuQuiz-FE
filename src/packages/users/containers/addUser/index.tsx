import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { statusFieldData } from '../../../../core/common/dataField';
import { FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { UserRole } from '../../../../core/models/role';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { store } from '../../../../core/store';
import { apiActions } from '../../../../core/store/api';
import { adminAddNewUser } from './action';
import { AddUserDTO } from './interface';

interface AddUserProps {}
const defaultValues: AddUserDTO = {
    email: '',
    fullName: '',
    gender: Gender.MALE,
    mobile: '',
    password: '',
    role: '',
};
const AddUser: React.FunctionComponent<AddUserProps> = () => {
    const methods = useForm<AddUserDTO>({
        defaultValues,
    });

    const _handleOnSubmit = async (data: AddUserDTO) => {
        adminAddNewUser(data).then((res) => {
            if (res) {
                methods.reset();
                store.dispatch(apiActions.resetState());

                toast.success('Add success!');
            }
        });
    };

    return (
        <div className="flex flex-col justify-center flex-1 py-12 sm:px-6 lg:px-8 intro-y">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-0 text-3xl font-extrabold text-center text-gray-900">Add user</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <FormWrapper methods={methods}>
                        <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                            <div className="flex justify-center">
                                <img className="h-36 w-36" src={'https://fuquiz.s3.ap-southeast-1.amazonaws.com/avatar-among-us-3.png'} />
                            </div>
                            <TextField label="Full name" name="fullName" type="fullName" />
                            <TextField label="Email address" name="email" type="email" />
                            <TextField label="phone number" name="mobile" type="text" />
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
                            <SelectField label="Status" name="isActive" values={[...statusFieldData]} />
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
