import * as React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { addBalance, getBalance, logout } from './action';
import { useStoreUser } from '../../../../core/store';
import { routes } from '../../../../core/routes';
import { UserRole } from '../../../../core/models/role';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FormWrapper, TextField } from '../../../../core/components/form';
import { AddBalanceDTO } from './interface';
import { vietnamCurrencyConverter } from '../../../../core/util/price';

interface NavigationProps {}
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

const NAV_LINK = [
    { label: 'Home', link: routes.homeUrl },
    { label: 'Blog', link: routes.blogListUrl },
    { label: 'Course', link: routes.subjectListUrl },
];

const USER_ACTION_LINK = [
    { label: 'your profile', link: routes.meUrl },
    { label: 'My course', link: routes.userCourseUrl },
    { label: 'Quiz Practice', link: routes.practiceListUrl },
];
const GUEST_SELECTION = [
    { label: 'Sign in', link: routes.loginUrl },
    { label: 'Register', link: routes.registerUrl },
];

export const Navigation: React.FC<NavigationProps> = () => {
    const router = useRouter();
    const userState = useStoreUser();
    const methods = useForm<AddBalanceDTO>({ defaultValues: { amount: 0 } });
    const [balance, setBalance] = React.useState<number | null>(0);

    const [popUp, setPopUp] = React.useState<boolean>(false);

    const _onLogout = async () => {
        const res = await logout();
        if (res) window.location.reload();
    };

    const _onOpenAddBalance = async (data: AddBalanceDTO) => {
        const res = await addBalance(data);
        if (res) {
            router.push(res);
        }
    };

    React.useEffect(() => {
        getBalance().then((res) => {
            setBalance(res.balance);
        });
    }, []);

    return (
        <>
            {popUp && (
                <>
                    <div onClick={() => setPopUp(false)} className="fixed z-20 w-screen h-screen cursor-pointer bg-black/75"></div>
                    <FormWrapper methods={methods}>
                        <form
                            onSubmit={methods.handleSubmit(_onOpenAddBalance)}
                            className="fixed z-30 flex flex-col max-w-md px-10 py-5 space-y-5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg top-1/2 left-1/2"
                        >
                            <h2 className="mt-0 text-2xl font-extrabold text-center text-gray-900">Add money to your balance</h2>

                            <p className="text-red-500">Note : the minimum of amount is 1000 VND and maximum is 50.000.000VND</p>

                            <TextField name="amount" type="number" label="Amount (VNĐ)" />

                            <div className="flex justify-between space-x-5">
                                <div
                                    onClick={() => setPopUp(false)}
                                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-center text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Cancel
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </FormWrapper>
                </>
            )}
            <Disclosure as="nav" className="bg-white shadow">
                {({ open }) => (
                    <>
                        <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex px-2 lg:px-0">
                                    <Link href={routes.homeUrl} passHref>
                                        <div className="flex items-center flex-shrink-0 cursor-pointer">
                                            <img className="block w-auto h-full " src="/asset/icons/logo-image.png" />
                                            <img className="block w-auto h-full -ml-3 md:block" src="/asset/icons/logo-text.png" />
                                        </div>
                                    </Link>
                                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                                        {NAV_LINK.map((item) => (
                                            <Link key={item.label} href={item.link}>
                                                <a
                                                    className={`${
                                                        router.pathname === item.link
                                                            ? 'border-indigo-500 text-gray-900'
                                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                                    } inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 `}
                                                >
                                                    {item.label}
                                                </a>
                                            </Link>
                                        ))}

                                        {userState.role.description !== UserRole.CUSTOMER && (
                                            <Link href={routes.dashboardUrl}>
                                                <a
                                                    className={`${
                                                        router.pathname === routes.dashboardUrl
                                                            ? 'border-indigo-500 text-gray-900'
                                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                                    } inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 `}
                                                >
                                                    Dashboard
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center lg:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block w-6 h-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center">
                                    {userState.id && userState.role.description === UserRole.CUSTOMER && (
                                        <div
                                            onClick={() => setPopUp(true)}
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Nạp cardd
                                        </div>
                                    )}
                                    <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                        {/* Profile dropdown */}
                                        {userState.id ? (
                                            <Menu as="div" className="relative flex-shrink-0 ml-4">
                                                <div>
                                                    <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        <img
                                                            className="w-8 h-8 rounded-full"
                                                            src={userState.imageUrl ? userState.imageUrl : '/asset/images/default-avatar.png'}
                                                            alt="avatar"
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 w-48 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="flex flex-col font-semibold text-white bg-orange-500 cursor-none">
                                                            <p className={'block px-4 py-2 text-sm  capitalize cursor-pointer '}>
                                                                Hello, {userState.fullName}
                                                            </p>
                                                            {balance ? (
                                                                <p className={'block px-4 py-2 text-sm  capitalize cursor-pointer '}>
                                                                    Balance: {vietnamCurrencyConverter(balance)}
                                                                </p>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </div>
                                                        {USER_ACTION_LINK.map((item) => (
                                                            <Menu.Item key={item.label}>
                                                                {({ active }) => (
                                                                    <Link href={item.link}>
                                                                        <a
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100' : '',
                                                                                'block hover:bg-gray-100 cursor-pointer px-4 py-2 text-sm text-gray-700 capitalize'
                                                                            )}
                                                                        >
                                                                            {item.label}
                                                                        </a>
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        ))}

                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    onClick={() => _onLogout()}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block hover:bg-gray-100 px-4 cursor-pointer py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    Sign out
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        ) : (
                                            <Link href={routes.loginUrl} passHref>
                                                <a
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Login
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* moobile layout */}
                        <Disclosure.Panel className="lg:hidden">
                            <div className="pt-2 pb-3 space-y-1">
                                {NAV_LINK.map((item) => (
                                    <Link passHref key={item.label} href={item.link}>
                                        <Disclosure.Button
                                            as="a"
                                            className={`block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 ${
                                                item.link === router.pathname && 'bg-indigo-50 border-indigo-500 text-indigo-700 capitalize'
                                            }`}
                                        >
                                            {item.label}
                                        </Disclosure.Button>
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-4 pb-2 border-t border-gray-200">
                                {userState.id ? (
                                    <>
                                        <div className="flex items-center px-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="w-10 h-10 rounded-full"
                                                    src={userState.imageUrl ? userState.imageUrl : '/asset/images/default-avatar.png'}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium text-gray-800">{userState.fullName}</div>
                                                <div className="text-sm font-medium text-gray-500">{userState.email}</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 space-y-1">
                                            {USER_ACTION_LINK.map((item) => (
                                                <Link href={item.link} key={item.label} passHref>
                                                    <a
                                                        className={`block w-full px-4 py-2 text-base font-medium text-left text-gray-500 hover:text-gray-800 hover:bg-gray-100 ${
                                                            router.asPath === item.link && 'bg-indigo-50 text-indigo-500'
                                                        }`}
                                                    >
                                                        {item.label}
                                                    </a>
                                                </Link>
                                            ))}

                                            <div
                                                onClick={() => _onLogout()}
                                                className="block px-4 py-2 text-base font-medium text-left text-gray-500 cursor-pointer hover:text-gray-800 hover:bg-gray-100"
                                            >
                                                Sign out
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {GUEST_SELECTION.map((item) => (
                                            <Link key={item.label} href={item.link} passHref>
                                                <div
                                                    className={`block cursor-pointer py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 ${
                                                        item.link === router.pathname && 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                                    }`}
                                                >
                                                    {item.label}
                                                </div>
                                            </Link>
                                        ))}
                                    </>
                                )}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};
