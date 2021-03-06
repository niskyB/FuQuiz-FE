import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Dimension } from '../../../../core/models/dimension';
import { routes } from '../../../../core/routes';
import { useGetDimensionListById } from '../../common/hooks/useGetDimensionListBySubjectId';
import { GetDimensionListDTO } from './interface';

interface DimensionListProps {
    subjectId: string;
    currentPage: number;
    pageSize: number;
}

const DimensionList: React.FunctionComponent<DimensionListProps> = ({ subjectId, currentPage, pageSize }) => {
    const methods = useForm();

    const router = useRouter();

    // const options = React.useMemo<GetDimensionListDTO>(() => ({ currentPage, pageSize: 99 }), [subjectId, currentPage, pageSize]);
    const { dimensionList } = useGetDimensionListById(subjectId);

    const _handleOnSubmit = () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Dimensions</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Dimension from subject website including their name and description.
                    </p>
                </div>
                <div className="flex flex-col items-end mt-4 space-y-2 sm:mt-0 sm:ml-16">
                    <div className="flex space-x-2">
                        <Link href={router.asPath.replace('/dimension', '/edit')} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Overview
                            </p>
                        </Link>
                        <Link href={router.asPath.replace(routes.adminDimensionListUrl, '' + routes.adminPackageListUrl)} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Price Package
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href={router.asPath + routes.adminAddDimensionUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Add Dimension
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <Table>
                                <TableHead fields={['ID', 'Type', 'Name', '']} />

                                <TableBody>
                                    {dimensionList.map((dimension) => (
                                        <TableRow key={dimension.id}>
                                            <TableDescription>
                                                <div className="text-gray-900">{dimension.id}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div className="text-gray-900">{dimension.type.description}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div className="text-gray-900">{dimension.name}</div>
                                            </TableDescription>
                                            <TableDescription>
                                                <div>
                                                    <Link href={`${routes.adminSubjectListUrl}/${subjectId}/dimension/edit/${dimension.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                </div>
                                            </TableDescription>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DimensionList;
