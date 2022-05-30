import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { PackageSubject } from '../../../core/models/package';
import { routes } from '../../../core/routes';
import { PaginationBar } from '../../dashboard';

interface PackageListProps {
    currentPage: number;
    pageSize: number;
    orderBy: string;
}

const PackageList: React.FunctionComponent<PackageListProps> = ({ currentPage, orderBy, pageSize }) => {
    const router = useRouter();
    const [count, setCount] = React.useState<number>(3);
    const [packages, setPackages] = React.useState<PackageSubject[]>([
        { id: '1', name: '3 months', duration: 3, listPrice: 3600, salePrice: 3200, status: { id: '1', name: 'Active' } },
        { id: '2', name: '6 months', duration: 6, listPrice: 5000, salePrice: 4500, status: { id: '1', name: 'Active' } },
        { id: '3', name: '6 months', duration: null, listPrice: 10000, salePrice: 9800, status: { id: '1', name: 'Active' } },
    ]);
    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Packages</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Package from subject including id, duration, list price, sale price and status.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={router.asPath.replace(routes.adminPackageListUrl, '')} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Back to subject detail
                        </p>
                    </Link>
                    <Link href={router.asPath + routes.adminAddPackageUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Packages
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
                                            Package
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Duration
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            List Price
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Sale Price
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && packages) &&
                                        packages.map((packageSubject) => (
                                            <tr key={packageSubject.id}>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{packageSubject.id}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{packageSubject.name}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{packageSubject.duration ? packageSubject.duration : ''}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{packageSubject.listPrice}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{packageSubject.salePrice}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{packageSubject.status.name}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm font-semibold whitespace-nowrap">
                                                    <div>
                                                        <Link href={`${routes.adminEditSliderUrl}/`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                        </Link>
                                                        <Link href={`${routes.adminEditSliderUrl}/`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Deactivate</p>
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
            <PaginationBar currentPage={Number(currentPage)} numberOfItem={3} pageSize={Number(pageSize)} routeUrl={router.asPath} />
        </div>
    );
};

export default PackageList;
