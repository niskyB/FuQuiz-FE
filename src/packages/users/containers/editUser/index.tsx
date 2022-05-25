import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormWrapper, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { UserRole } from '../../../../core/models/role';
import { Gender, User } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';

interface EditUserProps {}

const EditUser: React.FunctionComponent<EditUserProps> = () => {
    const methods = useForm({});
    const [user, setUser] = React.useState<User>({
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tr%E1%BB%8Bnh_V%C4%83n_Quy%E1%BA%BFt.jpg/1024px-Tr%E1%BB%8Bnh_V%C4%83n_Quy%E1%BA%BFt.jpg',
        email: 'kainesv86@gmail.com',
        createAt: '05/18/2022',
        fullName: 'Trịnh Văn Quyết',
        gender: Gender.MALE,
        isActive: true,
        mobile: '0986609813',
        password: '',
        role: { id: '6', name: UserRole.ADMIN },
        id: '1asdasd-asdzv-azsde4',
        token: '',
        typeId: '1',
        updateAt: '05/17/2022',
    });

    React.useEffect(() => {
        methods.setValue('fullName', user.fullName);
        methods.setValue('email', user.email);
        methods.setValue('mobile', user.mobile);
        methods.setValue('role', user.role.name);
        methods.setValue('gender', user.gender);
    }, []);

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
