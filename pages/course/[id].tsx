import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StoreLayout } from '../../src/packages/store';
import { FormErrorMessage, FormWrapper, SelectField, TextField } from '../../src/core/components/form';
import { useForm } from 'react-hook-form';
import { routes } from '../../src/core/routes';
import { Gender } from '../../src/core/models/user';

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
    const methods = useForm();
    const [popUp, setPopUp] = React.useState<boolean>(false);

    const _handleOnSubmit = () => {};

    return (
        <StoreLayout>
            {/* pup */}
            {popUp ? (
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900/50">
                    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                                <FormWrapper methods={methods}>
                                    <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                                        <TextField label="Fullname" name="fullName" type="text" />
                                        <TextField label="Email" name="Email" type="email" />
                                        <TextField label="Phone number" name="mobile" type="text" />
                                        <SelectField
                                            name="gender"
                                            label="Gender"
                                            values={[
                                                { label: 'Male', value: Gender.MALE },
                                                { label: 'Female', value: Gender.FEMALE },
                                            ]}
                                        />

                                        <div className="flex flex-col items-center space-y-4">
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
                    </div>
                    <button className="px-2 py-1 font-medium text-white bg-indigo-700 rounded-md" onClick={() => setPopUp(false)}>
                        Cancel
                    </button>
                </div>
            ) : (
                <></>
            )}
            <div className="space-y-4">
                <FormWrapper methods={methods}>
                    <div className="flex items-end p-5 space-x-5 bg-white rounded-md">
                        <div className="max-w-2xl">
                            <TextField label="Name" name="name" />
                        </div>
                        <div className="w-max">
                            <SelectField
                                label="category"
                                name="category"
                                values={[
                                    { label: 'category 1', value: '' },
                                    { label: 'category 2', value: '' },
                                    { label: 'category 3', value: '' },
                                    { label: 'category 4', value: '' },
                                ]}
                            />
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </div>
                </FormWrapper>

                <div className="flex flex-col p-10 space-y-10 bg-white rounded-md">
                    <div className="flex">
                        <div className="flex justify-center w-1/2">
                            <img src="https://www.stepn.com/img/coin.svg" alt="thumbnail" className="max-w-full w-96" />
                        </div>
                        <div className="flex-1 space-y-5">
                            <h1 className="text-2xl font-bold">Cách để GST to to moon cùng anh Quyết</h1>
                            <p className="text-gray-500">
                                Khóa học cung cấp cho học viên sẽ 1 cái nhìn toàn diện việc bảo vệ tiền số, bảo vệ thông tin tài sản. Học viên sẽ nắm
                                được những kĩ năng và kiến thức cơ bản, cần thiết về bảo vệ không chỉ tiền số mà còn là thông tin và tài sản số nói
                                chung.
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
                                    <button
                                        // href={tier.href}
                                        onClick={() => setPopUp(true)}
                                        className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-blue-500 border border-blue-600 rounded-md hover:bg-blue-800"
                                    >
                                        Buy {tier.name}
                                    </button>
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
            </div>
        </StoreLayout>
    );
};

EditSliderPage.getInitialProps = async (ctx: NextPageContext): Promise<EditSliderPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as EditSliderPageProps;
};

export default EditSliderPage;
