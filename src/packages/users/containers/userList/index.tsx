import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { UserRole } from '../../../../core/models/role';
import { Gender, User } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import PaginationBar from '../../../dashboard/components/paginationBar';

interface UserListProps {
    currentPage?: number;
    pageSize?: number;
}

const UserList: React.FunctionComponent<UserListProps> = ({ currentPage, pageSize }) => {
    const methods = useForm();

    const router = useRouter();

    const [users, setUsers] = React.useState<User[]>([
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
    ]);

    const [count, setCount] = React.useState(4);

    const _handleOnSubmit = async () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all users in database including their Information, role, create date and active status.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.adminAddUserUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add User
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="email" label="email" />
                            <TextField name="Fullname" label="fullName" />
                            <TextField name="createdAt" label="Create From" type={'date'} />
                            <SelectField
                                label="Active"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                                name="isActive"
                            />
                            <SelectField
                                label="Role"
                                values={[
                                    { label: 'Customer', value: UserRole.CUSTOMER },
                                    { label: 'Expert', value: UserRole.EXPERT },
                                    { label: 'Marketing', value: UserRole.MARKETING },
                                    { label: 'Admin', value: UserRole.ADMIN },
                                ]}
                                name="role"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </FormWrapper>
            </div>
            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Image
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Information
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Gender
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Role
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Create Date / Last Update
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Activation
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && users) &&
                                        users.map((user) => (
                                            <tr key={user.id}>
                                                <td className="py-4 pl-4 pr-3 whitespace-nowrap sm:pl-6">
                                                    <div className="max-w-sm">
                                                        <img className="w-10 h-10" src={user.imageUrl} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{user.email}</div>
                                                    <div className="text-gray-900">{user.fullName}</div>
                                                    <div className="text-gray-900">{user.mobile}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{user.gender}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{user.role.name}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{user.createAt}</div>
                                                    <div className="text-gray-900">{user.updateAt}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {user.isActive ? (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                                    <Link href={`${routes.adminEditUsersUrl}/${user.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};

export default UserList;
