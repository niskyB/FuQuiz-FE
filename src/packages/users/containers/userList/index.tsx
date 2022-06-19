import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, genderFieldData, Order, OrderFieldData, roleFieldData, statusFieldData } from '../../../../core/common/dataField';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { routes } from '../../../../core/routes';
import { pushWithParams } from '../../../../core/util';
import { userFieldDataParser } from '../../../../core/util/user';
import { useAdminGetUserList } from '../../';
import { FilterUserDTO, FilterUserFormDTO } from './interface';
import { useUrlParams } from '../../../../core/common/hooks/useUrlParams';
import { PaginationBar } from '../../../dashboard';

interface UserListProps extends FilterUserDTO {}

const defaultValues: FilterUserFormDTO = {
    email: '',
    fullName: '',
    gender: '',
    isActive: true,
    mobile: '',
    order: Order.DESC,
    orderBy: 'createdAt',
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

    const { count, userList } = useAdminGetUserList(options);

    useUrlParams({
        defaultPath: routes.adminUsersUrl,
        query: { ...router.query, currentPage, pageSize, email, fullName, gender, isActive, mobile, order, orderBy, role },
    });

    const _handleOnSubmit = async (data: FilterUserFormDTO) => {
        pushWithParams(router, routes.adminUsersUrl, { ...options, ...data });
    };

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
                                <TextField name="email" label="email" isRequire={false} />
                                <TextField name="fullName" label="Full name" isRequire={false} />
                                <TextField name="mobile" label="Mobile" isRequire={false} />
                                <SelectField label="Active" values={[...statusFieldData]} name="isActive" require={false} />
                            </div>
                            <div className="flex space-x-4">
                                <SelectField label="Role" values={[allFieldData, ...roleFieldData]} name="role" require={false} />
                                <SelectField label="Gender" values={[allFieldData, ...genderFieldData]} name="gender" require={false} />
                                <SelectField label="Sort" values={[...OrderFieldData]} name="order" require={false} />
                                <SelectField
                                    label="OrderBy"
                                    values={userFieldDataParser(['email', 'fullName', 'mobile'])}
                                    name="orderBy"
                                    require={false}
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
                            <Table>
                                <TableHead fields={['Image', 'ID', 'Email', 'Information', 'Gender', 'Role', 'Activation', '']} />
                                <TableBody>
                                    {userList.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableDescription>
                                                <div className="">
                                                    <img className="w-10 h-10" src={user.imageUrl || '/asset/images/default-avatar.png'} alt="" />
                                                </div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div className="text-gray-900">{user.id}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div className="text-gray-900">{user.email}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div className="text-gray-900">{user.fullName}</div>
                                                <div className="text-gray-900">{user.mobile}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div className="text-gray-900">{user.gender}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div className="text-gray-900">{user.role.description}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                {user.isActive ? (
                                                    <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                        Active
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                        Inactive
                                                    </span>
                                                )}
                                            </TableDescription>
                                            <TableDescription>
                                                <Link href={`${routes.adminEditUsersUrl}/${user.id}`} passHref>
                                                    <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">View</p>
                                                </Link>
                                                <Link href={`${routes.adminEditUsersUrl}/${user.id}`} passHref>
                                                    <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                </Link>
                                            </TableDescription>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={currentPage} numberOfItem={count} pageSize={pageSize} routeUrl={router.asPath} />
        </div>
    );
};

export default UserList;
