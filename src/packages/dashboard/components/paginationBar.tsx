import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
interface PaginationBarProps {
    currentPage: number;
    pageSize: number;
    numberOfItem: number;
    routeUrl: string;
}

export const PaginationBar: React.FunctionComponent<PaginationBarProps> = ({ pageSize, currentPage, numberOfItem, routeUrl }) => {
    //variable for pagination
    let isTruncate = false; //this variable for checking is render truncated box or not
    const numLinksTwoSide = 1;
    const totalPage = Math.ceil(numberOfItem / pageSize);
    const minRange = numLinksTwoSide + 4;
    const numberOfTruncLeft = currentPage - numLinksTwoSide;
    const numberOfTruncRight = currentPage + numLinksTwoSide;
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 rounded-md sm:px-6">
            <div className="flex justify-between flex-1 sm:hidden">
                <Link href={routeUrl.replace(`currentPage=${currentPage}`, `currentPage=${Number(currentPage) - 1}`)}>
                    <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Previous
                    </a>
                </Link>
                <Link href={routeUrl.replace(`currentPage=${currentPage}`, `currentPage=${Number(currentPage) + 1}`)}>
                    <a className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Next
                    </a>
                </Link>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{pageSize * (currentPage - 1) + 1}</span> to{' '}
                        <span className="font-medium">{pageSize * currentPage}</span> of <span className="font-medium">{numberOfItem}</span> orders
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <Link href={routeUrl.replace(`currentPage=${currentPage}`, `currentPage=${currentPage - 1 === 0 ? 1 : currentPage - 1}`)}>
                            <a className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </Link>

                        {[...Array(totalPage)].map((value, index) => {
                            const pos = index + 1;
                            //truncate left
                            if (pos < totalPage - minRange + 1) {
                                if (numberOfTruncLeft > 3 && pos !== 1 && pos <= numberOfTruncLeft - 1) {
                                    if (!isTruncate) {
                                        isTruncate = true;
                                        return (
                                            <span
                                                key={index}
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"
                                            >
                                                ...
                                            </span>
                                        );
                                    }
                                    return <></>;
                                }
                            }

                            //truncate right
                            if (numberOfTruncRight < totalPage - 3 + 1 && pos !== totalPage && pos > numberOfTruncRight) {
                                if (pos > minRange) {
                                    if (!isTruncate) {
                                        isTruncate = true;
                                        return (
                                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
                                                ...
                                            </span>
                                        );
                                    }

                                    return <></>;
                                }
                            }
                            //reset truncated when a box is rendered
                            isTruncate = false;
                            return (
                                <Link key={index} passHref href={routeUrl.replace(`currentPage=${currentPage}`, `currentPage=${index + 1}`)}>
                                    <a
                                        className={`${
                                            index + 1 === currentPage
                                                ? 'z-10 inline-flex items-center text-indigo-600 border border-indigo-500 bg-indigo-50'
                                                : 'items-center hidden text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 md:inline-flex'
                                        } relative px-4 py-2 text-sm font-medium cursor-pointer`}
                                    >
                                        {index + 1}
                                    </a>
                                </Link>
                            );
                        })}

                        <Link
                            href={routeUrl.replace(
                                `currentPage=${currentPage}`,
                                Number(currentPage) === Number(totalPage) ? `currentPage=${totalPage}` : `currentPage=${Number(currentPage) + 1}`
                            )}
                            passHref
                        >
                            <div className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-pointer rounded-r-md hover:bg-gray-50">
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};
