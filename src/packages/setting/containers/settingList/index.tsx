import { warn } from 'console';
import { options } from 'joi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { SystemPageProps } from '../../../../../pages/dashboard/setting';
import { allFieldData, statusFieldData } from '../../../../core/common/dataField';
import { settingFieldData } from '../../../../core/common/dataField/system';
import { useUrlParams } from '../../../../core/common/hooks';
import useTimeout from '../../../../core/common/hooks/useTimeout';
import { SystemType } from '../../../../core/common/interface';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { SettingEditEnum, SettingsEnum } from '../../../../core/models/setting';
import { routes } from '../../../../core/routes';
import { pushWithParams } from '../../../../core/util';
import { editBlogCategory } from '../../../blogCategory/containers/editCategory/action';
import { PaginationBar } from '../../../dashboard';
import { useGetSystemList } from '../../common/hooks/useGetSystemList';
import { updateStatusBlogCategory, updateStatusSubjectCategory } from './action';
import { SettingFilterDTO, SettingFilterForm } from './interface';

export interface SettingListProps extends SystemPageProps {}

export const SettingList: React.FunctionComponent<SettingListProps> = ({ currentPage, pageSize, order, orderBy, isActive, value, settingType }) => {
    const methods = useForm<SettingFilterForm>();

    const options: SettingFilterDTO = React.useMemo(
        () => ({
            currentPage,
            pageSize,
            order,
            orderBy,
            isActive,
            value,
        }),
        [currentPage, pageSize, order, orderBy, isActive, value]
    );

    useTimeout(() => {
        methods.setValue('settingType', settingType);
        methods.setValue('value', value);
        methods.setValue('isActive', isActive);
        methods.setValue('order', order);
        methods.setValue('orderBy', orderBy);
    }, 750);

    const { list, count } = useGetSystemList(options, settingType);

    const router = useRouter();

    const _handleOnSubmit = async (data: SettingFilterForm) => {
        pushWithParams(router, routes.adminSettingListUrl, { ...options, ...data });
    };

    useUrlParams({
        defaultPath: routes.adminSettingListUrl,
        query: { ...router.query, currentPage, pageSize, order, orderBy, isActive, value, settingType },
    });

    const renderEditCategory = (item: SystemType<any>) => {
        switch (item.type.toUpperCase()) {
            case SettingEditEnum.SUBJECT_CATEGORY.toUpperCase():
                return (
                    <Link href={`${routes.editSubjectCategorySettingUrl}/${item.id}`} passHref>
                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                    </Link>
                );
            case SettingEditEnum.POST_CATEGORY.toUpperCase():
                return (
                    <Link href={`${routes.editBlogCategorySettingUrl}/${item.id}`} passHref>
                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                    </Link>
                );
            default:
                return <></>;
        }
    };

    const _changeIsActive = (item: SystemType<any>) => {
        const { isActive } = item;
        if (confirm("Are you sure you want to change this item's status?")) {
            if (item.type.toUpperCase() === SettingEditEnum.SUBJECT_CATEGORY.toUpperCase()) {
                updateStatusSubjectCategory(item.id, { isActive: !isActive });
            }
            if (item.type.toUpperCase() === SettingEditEnum.POST_CATEGORY.toUpperCase()) {
                updateStatusBlogCategory(item.id, { isActive: !isActive });
            }
            window.location.reload();
        }
    };

    const renderEditStatusCategory = (item: SystemType<any>) => {
        switch (item.type.toUpperCase()) {
            case SettingEditEnum.SUBJECT_CATEGORY.toUpperCase():
                return (
                    <button onClick={() => _changeIsActive(item)}>
                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">{item.isActive ? 'Deactivate' : 'Active'}</p>
                    </button>
                );
            case SettingEditEnum.POST_CATEGORY.toUpperCase():
                return (
                    <button onClick={() => _changeIsActive(item)}>
                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">{item.isActive ? 'Deactivate' : 'Active'}</p>
                    </button>
                );
            default:
                return <></>;
        }
    };

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of settings including their id, type, value, order, status.</p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.adminSubjectCategoryListUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Subject category
                        </p>
                    </Link>
                    <Link href={routes.adminBlogCategoryListUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Blog Category
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <SelectField label="Type" values={settingFieldData} isRequire={false} name="settingType" />
                            <TextField isRequire={false} name="value" label="value" />
                            <SelectField label="Active" values={[...statusFieldData]} isRequire={false} name="isActive" />
                            <SelectField
                                label="Order By"
                                values={[
                                    { label: 'Id', value: 'id' },
                                    { label: 'Type', value: 'type' },
                                    { label: 'Value', value: 'value' },
                                    { label: 'Order', value: 'order' },
                                ]}
                                isRequire={false}
                                name="orderBy"
                            />
                            <SelectField
                                label="Sort"
                                values={[
                                    { label: 'ASCENDING', value: 'ASC' },
                                    { label: 'DESCENDING', value: 'DESC' },
                                ]}
                                isRequire={false}
                                name="order"
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
                                <TableHead fields={['ID', 'Type', 'Value', 'Description', 'Order', 'Activation', '', '']} />

                                <TableBody>
                                    {Boolean(count && list) &&
                                        list.map((setting) => (
                                            <TableRow key={`setting-${setting.id}`}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.type}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.value}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.description}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{setting.order}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    {setting.isActive ? (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </TableDescription>
                                                <TableDescription>{renderEditCategory(setting)}</TableDescription>
                                                <TableDescription>{renderEditStatusCategory(setting)}</TableDescription>
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
