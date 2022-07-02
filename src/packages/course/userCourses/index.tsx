import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { UserCoursesPageProps } from '../../../../pages/user/courses';
import { useUrlParams } from '../../../core/common/hooks/useUrlParams';
import { RegistrationStatus } from '../../../core/models/registration';
import { routes } from '../../../core/routes';
import { getDateStringToShow } from '../../../core/util/date';
import { PaginationBar } from '../../dashboard';
import Contact from '../../store/container/Contact';
import { CourseFilter } from '../components/courseFilter';
import { useGetRegistrationUserList } from '../hooks/useGetRegistrationListUser';
import { cancelRegistration, payCourse } from './action';

export interface UserCoursesProps extends UserCoursesPageProps {
    status: string | RegistrationStatus;
}

export const UserCourses: React.FunctionComponent<UserCoursesProps> = ({ category, currentPage, isFeature, name, order, pageSize }) => {
    const router = useRouter();

    const registrationOptions = React.useMemo<Partial<UserCoursesProps>>(
        () => ({ isActive: true, currentPage: 0, pageSize: 12, category, isFeature, name, order }),
        [category, isFeature, name, order]
    );

    const { registrationList, count } = useGetRegistrationUserList({ category, currentPage, isFeature, name, order, pageSize });
    useUrlParams({
        defaultPath: routes.courseListUrl,
        query: { ...router.query, category, currentPage, isFeature, name, order, pageSize },
    });

    const _handleOnCancelRegistration = (id: string) => {
        cancelRegistration(id).then(() => {
            window.location.reload();
        });
    };

    const _handleOnPayCourse = async (courseId: string) => {
        const res = await payCourse(courseId);
        if (res) {
            window.location.reload();
        }
    };
    return (
        <div className="flex space-x-10">
            <div className="flex flex-col space-y-10 w-fit">
                <CourseFilter registrationOptions={registrationOptions} />
                <Contact />
            </div>
            <div className="flex flex-col flex-1 space-y-4">
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 ">My courses</h1>
                <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
                    {registrationList.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col w-full overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5"
                        >
                            <div className="min-w-full mx-auto bg-white">
                                <img className="object-cover h-48 py-3 mx-auto" src={item.pricePackage.subject?.thumbnailUrl || ''} alt="thumbnail" />
                            </div>

                            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <p>#{item.id}</p>
                                        <a>{item.pricePackage.subject?.category.description}</a>
                                    </p>
                                    <Link href={`${routes.subjectUrl}/${item.pricePackage.subject?.id}`} passHref>
                                        <a href={''} className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900">{item.pricePackage.subject?.name}</p>
                                            <p className="mt-3 text-base text-gray-500">
                                                {item.pricePackage.subject?.description.substring(0, 100) + '...'}
                                            </p>
                                        </a>
                                    </Link>
                                </div>

                                <div className="flex flex-col items-start mt-6 space-y-1">
                                    <p className="text-gray-500">Package: {item.pricePackage.name}</p>
                                    <div className="text-gray-500">Status: {item.status}</div>
                                    {item.validFrom && (
                                        <p className="text-gray-500">
                                            Valid: {getDateStringToShow(item.validFrom)}{' '}
                                            {item.validTo ? ` - ${getDateStringToShow(item.validTo)}` : ''}
                                        </p>
                                    )}
                                    <p className="text-gray-500">Registration day: {moment(item.registrationTime).format('MMM Do YY')}</p>
                                    <p className="flex justify-between w-full text-2xl font-medium text-gray-900">
                                        <div className="text-orange-600">{item.pricePackage.salePrice}VNĐ</div>
                                        {item.status === RegistrationStatus.SUBMITTED && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    confirm('This action will cancel this registration') && _handleOnCancelRegistration(item.id)
                                                }
                                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                        {item.status === RegistrationStatus.APPROVED && (
                                            <button
                                                type="button"
                                                onClick={() => _handleOnPayCourse(item.pricePackage.subject?.id || '')}
                                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                PAY
                                            </button>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <PaginationBar currentPage={currentPage} numberOfItem={count} pageSize={pageSize} routeUrl={router.asPath} />
            </div>
        </div>
    );
};
