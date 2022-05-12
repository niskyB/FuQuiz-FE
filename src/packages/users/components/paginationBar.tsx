import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';

interface PaginationBarProps {
    currentPage: number;
    pageSize: number;
    numberOfItem: number;
    routeUrl: string;
    handleChangeFilterField: Function;
}

const PaginationBar: React.FunctionComponent<PaginationBarProps> = ({ pageSize, currentPage, numberOfItem, routeUrl, handleChangeFilterField }) => {
    //variable for pagination
    let isTruncate = false; //this variable for checking is render truncated box or not
    const numLinksTwoSide = 1;
    const totalPage = Math.ceil(numberOfItem / pageSize);
    const minRange = numLinksTwoSide + 4;
    const numberOfTruncLeft = currentPage - numLinksTwoSide;
    const numberOfTruncRight = currentPage + numLinksTwoSide;
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
            <div className="flex justify-between flex-1 sm:hidden">
                <Link href={`${routeUrl}?pageSize=${pageSize}&currentPage=${currentPage - 1}`}>
                    <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Previous
                    </a>
                </Link>
                <Link href={`${routeUrl}?pageSize=${pageSize}&currentPage=${Number(currentPage) + 1}`}>
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
                        <a
                            onClick={() =>
                                currentPage - 1 === 0
                                    ? handleChangeFilterField({ currentPage: 1 })
                                    : handleChangeFilterField({ currentPage: currentPage - 1 })
                            }
                            className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
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
                                <a
                                    key={index}
                                    onClick={() =>
                                        handleChangeFilterField({
                                            currentPage: index + 1,
                                        })
                                    }
                                    className={
                                        index + 1 === currentPage
                                            ? 'relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50'
                                            : 'relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 md:inline-flex'
                                    }
                                >
                                    {index + 1}
                                </a>
                            );
                        })}

                        <a
                            onClick={() =>
                                Number(currentPage) === Number(totalPage)
                                    ? handleChangeFilterField({ currentPage: totalPage })
                                    : handleChangeFilterField({ currentPage: Number(currentPage) + 1 })
                            }
                            className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PaginationBar;
