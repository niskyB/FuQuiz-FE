import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, genderFieldData, OrderBy, OrderByFieldData, roleFieldData, statusFieldData } from '../../../../core/common/dataField';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { routes } from '../../../../core/routes';
import { userFieldDataParser } from '../../../../core/util/user';
import { PaginationBar } from '../../../dashboard';
import { useAdminGetUserList } from './hook';
import { FilterUserDTO, FilterUserFormDTO } from './interface';

interface UserListProps extends FilterUserDTO {}

const defaultValues: FilterUserFormDTO = {
    email: '',
    fullName: '',
    gender: '',
    isActive: true,
    mobile: '',
    order: 'createdAt',
    orderBy: OrderBy.DESC,
    role: '',
};

const UserList: React.FunctionComponent<UserListProps> = ({
    currentPage,
    pageSize,
    email,
    fullName,
    gender,
    isActive,
    mobile,
    order,
    orderBy,
    role,
}) => {
    const options: UserListProps = React.useMemo(
        () => ({ currentPage, pageSize, email, fullName, gender, isActive, mobile, order, orderBy, role }),
        [currentPage, pageSize, email, fullName, gender, isActive, mobile, order, orderBy, role]
    );
    const methods = useForm<FilterUserFormDTO>({ defaultValues });

    const router = useRouter();

    const { count, userList } = useAdminGetUserList({ ...options, currentPage: options.currentPage - 1 });

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
                        <div className="flex flex-col space-y-4">
                            <div className="flex space-x-4">
                                <TextField name="email" label="email" />
                                <TextField name="fullName" label="Full name" />
                                <TextField name="mobile" label="Mobile" />
                                <SelectField label="Active" values={[...statusFieldData]} name="isActive" />
                            </div>
                            <div className="flex space-x-4">
                                <SelectField label="Role" values={[allFieldData, ...roleFieldData]} name="role" />
                                <SelectField label="Gender" values={[allFieldData, ...genderFieldData]} name="gender" />
                                <SelectField label="Order by" values={[...OrderByFieldData]} name="orderBy" />
                                <SelectField
                                    label="Order"
                                    values={userFieldDataParser(['email', 'fullName', 'createdAt', 'mobile', 'updateAt'])}
                                    name="order"
                                />
                            </div>
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
                                    {userList.map((user) => (
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
                                                <div className="text-gray-900">{user.createdAt}</div>
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
