import { CalendarIcon, CheckIcon, ChevronRightIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/outline';
import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { StoreLayout } from '../../src/packages/store';

interface EditBlogPageProps {
    id: string;
}
const tiers = [
    {
        name: 'Hobby',
        href: '#',
        priceMonthly: 12,
        description: 'All the basics for starting a new business',
        includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
    },
    {
        name: 'Freelancer',
        href: '#',
        priceMonthly: 24,
        description: 'All the basics for starting a new business',
        includedFeatures: ['Potenti felis, in cras at at ligula nunc. ', 'Orci neque eget pellentesque.', 'Donec mauris sit in eu tincidunt etiam.'],
    },
    {
        name: 'Startup',
        href: '#',
        priceMonthly: 32,
        description: 'All the basics for starting a new business',
        includedFeatures: [
            'Potenti felis, in cras at at ligula nunc. ',
            'Orci neque eget pellentesque.',
            'Donec mauris sit in eu tincidunt etiam.',
            'Faucibus volutpat magna.',
        ],
    },
    {
        name: 'Enterprise',
        href: '#',
        priceMonthly: 48,
        description: 'All the basics for starting a new business',
        includedFeatures: [
            'Potenti felis, in cras at at ligula nunc. ',
            'Orci neque eget pellentesque.',
            'Donec mauris sit in eu tincidunt etiam.',
            'Faucibus volutpat magna.',
            'Id sed tellus in varius quisque.',
            'Risus egestas faucibus.',
            'Risus cursus ullamcorper.',
        ],
    },
];
const positions = [
    {
        id: 1,
        title: 'Back End Developer',
        type: 'Quiz',
    },
    {
        id: 2,
        title: 'Front End Developer',
        type: 'Lesson',
    },
    {
        id: 3,
        title: 'User Interface Designer',
        type: 'Subject',
    },
];
const EditBlogPage: NextPage<EditBlogPageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <div className="flex flex-col mt-10">
                <div className="flex p-10 space-x-10 bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-center w-1/2">
                        <img className="h-80" src="https://www.stepn.com/img/coin.svg" />
                    </div>
                    <div className="flex flex-col flex-1 space-y-5">
                        <h1 className="text-3xl font-bold">Cách để GST to to moon cùng anh Quyết</h1>
                        <p className="text-xl text-gray-600">
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
                            <li key={position.id}>
                                <a href="#" className="block hover:bg-gray-50">
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
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StoreLayout>
    );
};

EditBlogPage.getInitialProps = async (ctx: NextPageContext): Promise<EditBlogPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditBlogPageProps;
};

export default EditBlogPage;
