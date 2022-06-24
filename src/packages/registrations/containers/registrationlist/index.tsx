import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, OrderFieldData, statusFieldData } from '../../../../core/common/dataField';
import { registrationStatusFieldData } from '../../../../core/common/dataField/registration';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';

import { routes } from '../../../../core/routes';
import { pushWithParams } from '../../../../core/util';
import { PaginationBar } from '../../../dashboard';
import { useGetUserById } from '../../../users';
import { RegistrationFilterDTO, RegistrationFilterFormDTO, useGetRegistrationList } from '../../common/hooks/useGetRegistrationList';

interface RegistrationListProps extends RegistrationFilterDTO {}

const RegistrationsList: React.FunctionComponent<RegistrationListProps> = ({
    currentPage,
    pageSize,
    email,
    order,
    orderBy,
    status,
    subject,
    validFrom,
    validTo,
}) => {
    const router = useRouter();
    const methods = useForm<RegistrationFilterFormDTO>();

    const { count, registrationList } = useGetRegistrationList({ currentPage, pageSize, email, order, orderBy, status, subject, validFrom, validTo });
    console.log(registrationList);
    const _handleOnSubmit = async (data: RegistrationFilterFormDTO) => {
        // console.log(data);
        pushWithParams(router, routes.adminRegistrationUrl, { ...data });
    };

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Registrations</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all registrations in database including their id, email, registration time, subject, package, total cost, status,
                        valid from, valid to.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.adminAddRegistrationUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Registration
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField isRequire={false} name="subject" label="subject" />
                            <TextField isRequire={false} name="email" label="email" />
                            <TextField isRequire={false} name="validFrom" label="Registration From" type={'date'} />
                            <TextField isRequire={false} name="validTo" label="Registration To" type={'date'} />
                            <SelectField label="Status" values={[allFieldData, ...registrationStatusFieldData]} isRequire={false} name="isActive" />
                            <SelectField label="Sort" values={[...OrderFieldData]} name="order" isRequire={false} />
                            <SelectField
                                label="Order By"
                                values={[
                                    { label: 'ID', value: 'id' },
                                    { label: 'Email', value: 'email' },
                                    { label: 'Registration Time', value: 'registrationTime' },
                                    { label: 'Subject', value: 'subject' },
                                    { label: 'Package', value: 'package' },
                                    { label: 'Total cost', value: 'totalCost' },
                                    { label: 'status', value: 'status' },
                                    { label: 'Valid From', value: 'validFrom' },
                                    { label: 'Valid To', value: 'validTo' },
                                ]}
                                name="orderBy"
                                isRequire={false}
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
                            <Table>
                                <TableHead
                                    fields={[
                                        'ID',
                                        'Email',
                                        'Registration Time',
                                        'Subject',
                                        'Package',
                                        'Total Cost',
                                        'Status',
                                        'Valid From',
                                        'Valid To',
                                        'Last Updated By',
                                        '',
                                    ]}
                                />

                                <TableBody>
                                    {Boolean(count && registrationList) &&
                                        registrationList.map((registration) => {
                                            return (
                                                <TableRow key={registration.id}>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.id}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.customer.user.email}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.registrationTime}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.pricePackage.subject?.name}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.pricePackage.name}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.totalCost}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.status.toUpperCase()}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.validFrom}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.validTo}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{registration.lastUpdatedBy}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <Link href={`${routes.adminEditRegistrationUrl}/${registration.id}`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Update</p>
                                                        </Link>
                                                    </TableDescription>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};

export default RegistrationsList;
