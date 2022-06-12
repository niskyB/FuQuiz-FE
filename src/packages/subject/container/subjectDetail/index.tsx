import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import React from 'react';
import { SubjectFilterDTO } from '../subjectList/interface';
import { useGetSubject } from '../../../slider/common/hooks/useGetSubject';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { genderFieldData } from '../../../../core/common/dataField';
import { UserFilter } from '../../components/userFilter';
import Contact from '../../../store/container/Contact';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { useGetPricePackageById } from '../../../package/common/hooks/useGetPricePackageBySubjectId';
import { useGetPricePackageListById } from '../../../package/common/hooks/useGetPricePackageListBySubjectId';
interface SubjectDetailProps extends SubjectFilterDTO {
    id: string;
}
const tiers = [
    {
        name: 'Hobby',
        href: '#',
        priceMonthly: 12,
        description: 'All the basics for starting a new business',
    },
    {
        name: 'Freelancer',
        href: '#',
        priceMonthly: 24,
        description: 'All the basics for starting a new business',
    },
    {
        name: 'Startup',
        href: '#',
        priceMonthly: 32,
        description: 'All the basics for starting a new business',
    },
    {
        name: 'Enterprise',
        href: '#',
        priceMonthly: 48,
        description: 'All the basics for starting a new business',
    },
];
const positions = [
    {
        id: 2,
        title: 'Chương 1: đầu tư như thé nào là chính xác?',
        type: 'Subject topic',
        department: '',
    },
    {
        id: 1,
        title: 'Quiz ôn tập chương 1',
        type: 'Quiz',
        department: '',
    },
    {
        id: 3,
        title: 'Hướng dẫn cụ thể cách tạo ví stepN',
        type: 'Lesson',
        department: '',
    },
];
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
    const methods = useForm();
    const [popUp, setPopUp] = React.useState<boolean>(false);

    const subjectOption = React.useMemo<Partial<SubjectFilterDTO>>(
        () => ({ isActive: true, isFeature, currentPage, pageSize, category, name }),
        [category, currentPage, isFeature, name, pageSize]
    );
    const { pricePackageList } = useGetPricePackageListById(id);
    const { subject } = useGetSubject(id);

    const _handleOnSubmit = () => {};
    return (
        <>
            {popUp && (
                <div className="fixed inset-0 flex items-center justify-center w-screen h-screen">
                    <div className="fixed w-screen h-screen cursor-pointer bg-black/80" onClick={() => setPopUp(false)}></div>
                    <div className="z-20 flex flex-col w-full max-w-2xl px-10 py-8 space-y-10 bg-white rounded-lg shadow">
                        <h1 className="text-3xl font-bold text-center">Registration form</h1>
                        <FormWrapper methods={methods}>
                            <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="w-full space-y-5">
                                <TextField label="Fullname" name="fullName" type="text" />
                                <TextField label="Email" name="Email" type="email" />
                                <TextField label="Phone number" name="mobile" type="text" />
                                <SelectField name="gender" label="Gender" values={genderFieldData} />

                                <div className="flex items-center space-x-5">
                                    <button
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        onClick={() => setPopUp(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Register Subject
                                    </button>
                                </div>
                            </form>
                        </FormWrapper>
                    </div>
                </div>
            )}
            <div className="flex space-x-10">
                <div className="w-full max-w-xs space-y-10">
                    <UserFilter subjectOption={subjectOption} />
                    <Contact />
                </div>
                <div className="flex flex-col flex-1 p-10 space-y-10 bg-white rounded-md">
                    <div className="flex">
                        <div className="flex justify-center w-1/2">
                            <img src={subject?.thumbnailUrl} alt="thumbnail" className="max-w-full w-96" />
                        </div>
                        <div className="flex-1 ">
                            <h1 className="text-2xl font-bold">{subject?.name}</h1>
                            <p className="mt-1 font-semibold text-indigo-500">{subject?.category.name}</p>
                            <p className="mt-1 text-gray-500">{subject?.tagLine}</p>
                            <p className="mt-3 text-gray-500">{subject?.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h1 className="mt-12 text-3xl font-bold sm:mt-16">Package</h1>
                        {pricePackageList && pricePackageList.length > 0 ? (
                            <div className="mt-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                                {pricePackageList.map((tier) => (
                                    <div key={tier.name} className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-lg">
                                        <div className="p-6">
                                            <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                                            <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                            <p className="mt-8">
                                                <span className="text-4xl font-medium text-gray-900">{tier.salePrice}đ</span>{' '}
                                                <span className="text-base font-medium text-gray-500">/mo</span>
                                            </p>
                                            <button
                                                onClick={() => setPopUp(true)}
                                                className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-blue-500 border border-blue-600 rounded-md hover:bg-blue-800"
                                            >
                                                Buy
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-base text-red-500">At current we don't have any price package yet, please check this out later!</p>
                        )}
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h1 className="mt-12 text-3xl font-bold sm:mt-16">Lesson</h1>
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                                {positions.map((position) => (
                                    <Link href={`${router.asPath}/quiz`} key={position.id}>
                                        <a className="block hover:bg-gray-50">
                                            <div className="px-4 py-4 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-col space-y-3">
                                                        <div className="text-sm font-medium text-indigo-600 truncate">{position.title}</div>
                                                        <div className="px-2 text-xs font-semibold leading-5 text-white bg-green-500 rounded-full max-w-fit">
                                                            {position.type}
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
