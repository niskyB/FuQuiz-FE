import * as React from 'react';
import { FolderIcon, HomeIcon, LogoutIcon, MapIcon } from '@heroicons/react/outline';
import { routes } from '../../../core/routes';
import { useStoreUser } from '../../../core/store';
import { useRouter } from 'next/router';

interface SideBarProps {}
const navigation = [
    { name: '', icon: HomeIcon, link: '#' },
    { name: 'Slider', icon: MapIcon, link: routes.sliderUrl },
    { name: 'Add slider', icon: FolderIcon, link: routes.addSliderUrl },
];

const secondaryNavigation = [{ name: 'Back to store', icon: LogoutIcon, link: routes.homeUrl }];
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
const SideBar: React.FunctionComponent<SideBarProps> = () => {
    const userState = useStoreUser();
    const router = useRouter();
    return (
        <div className="flex flex-col flex-1 w-full max-w-xs min-h-0 bg-gray-800">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <img className="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                </div>
                <nav className="px-2 mt-5 space-y-1 bg-gray-800 " aria-label="Sidebar">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className={classNames(
                                router.asPath === item.link ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    router.asPath === item.link ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                        </a>
                    ))}

                    <div className="relative py-5">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-2 bg-gray-800 text-sm text-white">Or</span>
                        </div>
                    </div>

                    {secondaryNavigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className={classNames(
                                router.asPath === item.link ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    router.asPath === item.link ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                        </a>
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
