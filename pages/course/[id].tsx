import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StoreLayout } from '../../src/packages/store';

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
interface EditSliderPageProps {
    id: string;
}
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}
const EditSliderPage: NextPage<EditSliderPageProps> = ({ id }) => {
    const router = useRouter();
    return (
        <StoreLayout>
            <div className="flex flex-col p-10 space-y-10 bg-white rounded-md">
                <div className="flex">
                    <div className="flex justify-center w-1/2">
                        <img src="https://www.stepn.com/img/coin.svg" alt="thumbnail" className="max-w-full w-96" />
                    </div>
                    <div className="flex-1 space-y-5">
                        <h1 className="text-2xl font-bold">Cách để GST to to moon cùng anh Quyết</h1>
                        <p className="text-gray-500">
                            Khóa học cung cấp cho học viên sẽ 1 cái nhìn toàn diện việc bảo vệ tiền số, bảo vệ thông tin tài sản. Học viên sẽ nắm được
                            những kĩ năng và kiến thức cơ bản, cần thiết về bảo vệ không chỉ tiền số mà còn là thông tin và tài sản số nói chung.
                        </p>
                    </div>
                </div>
                <h1 className="mt-12 text-3xl font-bold sm:mt-16">Package</h1>
                <div className="mt-4 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                    {tiers.map((tier) => (
                        <div key={tier.name} className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm shadow-lg">
                            <div className="p-6">
                                <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                <p className="mt-8">
                                    <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                                    <span className="text-base font-medium text-gray-500">/mo</span>
                                </p>
                                <a
                                    href={tier.href}
                                    className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-blue-500 border border-blue-600 rounded-md hover:bg-blue-800"
                                >
                                    Buy {tier.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

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
        </StoreLayout>
    );
};

EditSliderPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSliderPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditSliderPageProps;
};

export default EditSliderPage;
