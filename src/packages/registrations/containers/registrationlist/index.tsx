import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { OrderFieldData } from '../../../../core/common/dataField';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';

import { Registration } from '../../../../core/models/registration';
import { UserRole } from '../../../../core/models/role';
import { Gender } from '../../../../core/models/user';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';

interface RegistrationListProps {
    currentPage?: number;
    pageSize?: number;
}

const RegistrationsList: React.FunctionComponent<RegistrationListProps> = ({ currentPage, pageSize }) => {
    const methods = useForm();

    const router = useRouter();

    const [registrations, setRegistrations] = React.useState<Registration[]>([]);

    const [count, setCount] = React.useState(4);

    const _handleOnSubmit = async () => {};

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
                    <Link href={routes.addRegistrationUrl} passHref>
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
                            <TextField require={false} name="subject" label="subject" />
                            <TextField require={false} name="email" label="email" />
                            <TextField require={false} name="createdAt" label="Registration From" type={'date'} />
                            <TextField require={false} name="createdAt" label="Registration To" type={'date'} />
                            <SelectField
                                label="Status"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                                require={false}
                                name="isActive"
                            />
                            <SelectField label="Sort" values={[...OrderFieldData]} name="order" require={false} />
                            <SelectField
                                label="OrderBy"
                                values={[
                                    { label: 'ID', value: 'id' },
                                    { label: 'Email', value: 'email' },
                                    { label: 'Registration Time', value: 'Registration Time' },
                                ]}
                                name="orderBy"
                                require={false}
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
                                    {Boolean(count && registrations) &&
                                        registrations.map((registration) => (
                                            <TableRow key={registration.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{registration.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{registration.email}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{registration.registrationTime}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{registration.subject.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{registration.package.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{registration.totalCost}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    {registration.status ? (
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
                                                    <div className="text-gray-900">{registration.validForm}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{registration.validTo}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">Hoang Loc</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${routes.editRegistrationUrl}/${registration.id}`} passHref>
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
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};

export default RegistrationsList;
