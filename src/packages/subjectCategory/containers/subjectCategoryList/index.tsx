import Link from 'next/link';
import * as React from 'react';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { routes } from '../../../../core/routes';
import { useGetSubjectCategoryList } from '../../common/hooks/useGetSubjectCategoryList';

interface SubjectCategoryListProps {}

export const SubjectCategoryList: React.FunctionComponent<SubjectCategoryListProps> = () => {
    const { categories } = useGetSubjectCategoryList();
    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Subject category</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all subject category.</p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.adminSettingListUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto">
                            Back to setting
                        </p>
                    </Link>
                    <Link href={routes.adminAddSubjectCategoryUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add subject category
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <Table>
                                <TableHead fields={['ID', 'Name', '']} />
                                <TableBody>
                                    {categories ? (
                                        categories.map((category) => (
                                            <TableRow key={category.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{category.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{category.description}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${routes.editSubjectCategorySettingUrl}/${category.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                </TableDescription>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
