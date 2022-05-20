import * as React from 'react';
import { BookOpenIcon, HomeIcon, LogoutIcon, MapIcon } from '@heroicons/react/outline';
import { routes } from '../../../core/routes';
import { useStoreUser } from '../../../core/store';
import { useRouter } from 'next/router';
import { UserRole } from '../../../core/models/role';
import { AllRole } from '../../../core/models/user';
import Link from 'next/link';

interface SideBarProps {}
const navigation = [
    // { name: '', icon: HomeIcon, link: '#', acceptRole: [...AllRole] },
    { name: 'Slider', icon: MapIcon, link: routes.sliderUrl, acceptRole: [UserRole.ADMIN, UserRole.MARKETING] },
    { name: 'Blog', icon: BookOpenIcon, link: routes.blogUrl, acceptRole: [UserRole.ADMIN, UserRole.MARKETING] },
    { name: 'Blog', icon: BookOpenIcon, link: routes.blogUrl, acceptRole: [UserRole.ADMIN] },
];

const secondaryNavigation = [{ name: 'Back to store', icon: LogoutIcon, link: routes.homeUrl }];
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
const SideBar: React.FunctionComponent<SideBarProps> = () => {
    const userState = useStoreUser();
    const router = useRouter();
    return (
        <div className="flex flex-col flex-1 max-w-xs max-h-screen min-h-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center justify-center flex-shrink-0 px-4">
                    <Link href={routes.homeUrl} passHref>
                        <div className="flex items-center flex-shrink-0 h-20 cursor-pointer">
                            <img className="block w-auto h-full " src="/asset/icons/logo-image.png" />
                            <img className="hidden block w-auto h-full -ml-3 md:block" src="/asset/icons/logo-text.png" />
                        </div>
                    </Link>
                </div>
                <nav className="px-2 mt-5 space-y-1 bg-white " aria-label="Sidebar">
                    {navigation.map((item) => {
                        if (item.acceptRole.findIndex((selection) => userState.role && userState.role.name === selection) !== -1)
                            return (
                                <Link key={item.name} href={item.link} passHref>
                                    <div
                                        className={classNames(
                                            router.asPath === item.link ? 'bg-gray-500 text-white' : 'text-black hover:bg-gray-500 hover:text-white',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                router.asPath === item.link ? 'text-white' : 'text-black group-hover:text-white',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span className="flex-1">{item.name}</span>
                                    </div>
                                </Link>
                            );
                    })}

                    <div className="relative py-5">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-2 text-sm text-black bg-white">Or</span>
                        </div>
                    </div>

                    {secondaryNavigation.map((item) => (
                        <Link key={item.name} href={item.link} passHref>
                            <div
                                className={classNames(
                                    router.asPath === item.link ? 'bg-gray-500 text-white' : 'text-black hover:bg-gray-500 hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer'
                                )}
                            >
                                <item.icon
                                    className={classNames(
                                        router.asPath === item.link ? 'text-white' : 'text-black group-hover:text-white',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="flex-1">{item.name}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 bg-gray-700">
                <div className="flex-shrink-0 block w-full group">
                    <div className="flex items-center">
                        <div>
                            <img className="inline-block rounded-full h-9 w-9" src={userState.imageUrl} alt="user avatar" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">{userState.fullName}</p>
                            <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">{userState.role?.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
