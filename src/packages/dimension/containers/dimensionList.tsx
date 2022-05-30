import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../core/components/form';
import { Dimension } from '../../../core/models/dimension';
import { routes } from '../../../core/routes';
import { PaginationBar } from '../../dashboard';

interface DimensionListProps {
    currentPage: number;
    pageSize: number;
    orderBy: string;
}

const DimensionList: React.FunctionComponent<DimensionListProps> = ({ currentPage, pageSize, orderBy }) => {
    const methods = useForm();
    const [count, setCount] = React.useState<number>(4);
    const router = useRouter();
    const [dimensions, setDimension] = React.useState<Dimension[]>([
        { id: '1', description: 'Description 1', name: 'Business', typeId: { id: '1', name: 'Domain' } },
        { id: '2', description: 'Description 2', name: 'Process', typeId: { id: '2', name: 'Domain' } },
        { id: '3', description: 'Description 3', name: 'People', typeId: { id: '3', name: 'Group' } },
        { id: '4', description: 'Description 4', name: 'Initiating', typeId: { id: '4', name: 'Group' } },
    ]);

    const _handleOnSubmit = () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Sliders</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Dimension from subject website including their name and description.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={router.asPath.replace(routes.adminDimensionListUrl, '')} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Back to subject detail
                        </p>
                    </Link>
                    <Link href={router.asPath + routes.adminAddDimensionUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Dimension
                        </p>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            ID
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Type
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Dimension
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && dimensions) &&
                                        dimensions.map((dimension) => (
                                            <tr key={dimension.id}>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{dimension.id}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{dimension.typeId.name}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{dimension.description}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm font-semibold whitespace-nowrap">
                                                    <div>
                                                        <Link href={`${routes.adminEditSliderUrl}/`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                        </Link>
                                                        <Link href={`${routes.adminEditSliderUrl}/`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Delete</p>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(currentPage)} numberOfItem={count} pageSize={Number(pageSize)} routeUrl={router.asPath} />
        </div>
    );
};

export default DimensionList;
