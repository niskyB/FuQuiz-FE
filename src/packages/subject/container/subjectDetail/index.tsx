import { useRouter } from 'next/router';
import React from 'react';
import { SubjectFilterDTO } from '../subjectList/interface';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { useGetPricePackageListBySubjectId } from '../../../package/common/hooks/useGetPricePackageListBySubjectId';
import { store, useStoreUser } from '../../../../core/store';
import { formActions } from '../../../../core/store/form';
import { vietnamCurrencyConverter } from '../../../../core/util/price';
import { useGetLessonList } from '../../../lesson/common/hooks/useGetLessonList';
import { useGetSubject } from '../../common/hooks/useGetSubject';
import SubjectSide from '../subjectSide';
import { Order } from '../../../../core/common/dataField';
interface SubjectDetailProps extends SubjectFilterDTO {
    id: string;
}

export const SubjectDetail: React.FunctionComponent<SubjectDetailProps> = ({
    category,
    createdAt,
    currentPage,
    id,
    isActive,
    isFeature,
    name,
    pageSize,
}) => {
    const router = useRouter();
    const userState = useStoreUser();

    const { pricePackageList } = useGetPricePackageListBySubjectId(id);
    const { subject } = useGetSubject(id);
    const { lessonList } = useGetLessonList(id);
    return (
        <>
            <div className="flex space-x-10">
                <div className="w-full max-w-xs space-y-10">
                    <SubjectSide
                        category={category}
                        currentPage={currentPage}
                        isFeature={isFeature}
                        name={name}
                        order={Order.DESC}
                        pageSize={pageSize}
                    />
                </div>
                <div className="flex flex-col flex-1 p-10 space-y-10 bg-white rounded-md">
                    <div className="flex">
                        <div className="flex justify-center w-1/2">
                            <img src={subject?.thumbnailUrl} alt="thumbnail" className="max-w-full w-96" />
                        </div>
                        <div className="flex-1 ">
                            <h1 className="text-2xl font-bold">{subject?.name}</h1>
                            <p className="mt-1 font-semibold text-indigo-500">{subject?.category.description}</p>
                            <p className="mt-1 text-gray-500">{subject?.tagLine}</p>
                            <p className="mt-3 text-gray-500">{subject?.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h1 className="mt-12 text-3xl font-bold sm:mt-16">Package</h1>
                        {pricePackageList && pricePackageList.length > 0 ? (
                            <div className="mt-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                                {pricePackageList.map((tier) => (
                                    <div key={tier.name} className="bg-white border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-lg">
                                        <div className="p-6">
                                            <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                                            <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                            <p className="flex flex-col mt-8">
                                                <span className="text-2xl font-medium text-gray-500 line-through">
                                                    {vietnamCurrencyConverter(tier.originalPrice)}
                                                </span>
                                                <div className="">
                                                    <span className="text-4xl font-medium text-gray-900">
                                                        {vietnamCurrencyConverter(tier.salePrice)}
                                                    </span>
                                                    <span className="text-base font-medium text-gray-500">/mo</span>
                                                </div>
                                            </p>
                                            <button
                                                onClick={() => {
                                                    if (subject && !userState.id) {
                                                        store.dispatch(
                                                            formActions.setRegistrationForm({
                                                                pricePackage: pricePackageList,
                                                                subjectId: subject.id,
                                                                subjectName: subject?.name,
                                                                defaultPackage: tier.id,
                                                            })
                                                        );
                                                    }
                                                }}
                                                className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-blue-500 border border-blue-600 rounded-md hover:bg-blue-800"
                                            >
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-base text-red-500">
                                At current we don&apos;t have any price package yet, please check this out later!
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h1 className="mt-12 text-3xl font-bold sm:mt-16">Lesson</h1>
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                                {lessonList.map((lesson) => (
                                    <Link href={`${router.asPath}/quiz`} key={lesson.id}>
                                        <a className="block hover:bg-gray-50">
                                            <div className="px-4 py-4 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-col space-y-3">
                                                        <div className="text-sm font-medium text-indigo-600 truncate">{lesson.name}</div>
                                                        <div className="px-2 text-xs font-semibold leading-5 text-white bg-green-500 rounded-full w-fit ">
                                                            {lesson.type.description}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center flex-shrink-0 ml-2">
                                                        <div className="w-7 h-7">
                                                            <ChevronRightIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
