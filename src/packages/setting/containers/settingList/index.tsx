import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Setting } from '../../../../core/models/setting';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';

interface SettingListProps {
    currentPage?: number;
    pageSize?: number;
}

export const SettingList: React.FunctionComponent<SettingListProps> = ({ currentPage, pageSize }) => {
    const methods = useForm();

    const router = useRouter();

    const [settings, setSettings] = React.useState<Setting[]>([
        {
            id: '12312-11-231',
            type: { id: 'hzdio-11-asd', name: 'Type 1' },
            value: 'Setting 1',
            order: 1,
            isActivate: true,
        },
        {
            id: '12312-11-231',
            type: { id: 'hzdio-11-asd', name: 'Type 1' },
            value: 'Setting 1',
            order: 1,
            isActivate: true,
        },
        {
            id: '12312-11-231',
            type: { id: 'hzdio-11-asd', name: 'Type 1' },
            value: 'Setting 1',
            order: 1,
            isActivate: true,
        },
        {
            id: '12312-11-231',
            type: { id: 'hzdio-11-asd', name: 'Type 1' },
            value: 'Setting 1',
            order: 1,
            isActivate: true,
        },
    ]);

    const [count, setCount] = React.useState(4);

    const _handleOnSubmit = async () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all settings in database including their Information, create date and active status.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.addSettingUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Setting
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField require={false} name="value" label="value" />
                            <SelectField
                                label="Type"
                                values={[
                                    { label: 'Type 1', value: '1' },
                                    { label: 'Type 2', value: '2' },
                                ]}
                                require={false}
                                name="type"
                            />
                            <SelectField
                                label="Active"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                                require={false}
                                name="isActive"
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
                                <TableHead fields={['ID', 'Type', 'Value', 'Order', 'Activation', '', '']} />

                                <TableBody>
                                    {Boolean(count && settings) &&
                                        settings.map((setting) => (
                                            <TableRow key={setting.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.type.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.value}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.order}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    {setting.isActivate ? (
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
                                                    <Link href={`${routes.editSettingUrl}/${setting.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                </TableDescription>
                                                <TableDescription>
                                                    {setting.isActivate ? (
                                                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
                                                            Deactivate
                                                        </button>
                                                    ) : (
                                                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                            Activate
                                                        </button>
                                                    )}
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
