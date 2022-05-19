import * as React from 'react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, MapIcon } from '@heroicons/react/outline';
import { routes } from '../../../core/routes';
import Link from 'next/link';

interface SideBarProps {}

const SideBar: React.FunctionComponent<SideBarProps> = () => {
    const navigation = [
        { name: 'Dashboard', icon: HomeIcon, href: routes.dashboardUrl, current: true },
        { name: 'Slider', icon: MapIcon, href: routes.sliderUrl, count: 3, current: false },
        { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
        { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
        { name: 'Documents', icon: InboxIcon, href: '#', current: false },
        { name: 'Reports', icon: ChartBarIcon, href: '#', count: 12, current: false },
    ];

    function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div className="flex flex-col flex-1 max-w-xs min-h-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center justify-center flex-shrink-0 px-4">
                    <Link href={routes.homeUrl} passHref>
                        <div className="flex items-center flex-shrink-0 h-20 cursor-pointer">
                            <img className="block w-auto h-full " src="/asset/icons/logo-image.png" />
                            <img className="hidden block w-auto h-full -ml-3 md:block" src="/asset/icons/logo-text.png" />
                        </div>
                    </Link>
                </div>
                <nav className="flex-1 px-2 mt-5 space-y-1 bg-white" aria-label="Sidebar">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            {item.count ? (
                                <span
                                    className={classNames(
                                        item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                                        'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                                    )}
                                >
                                    {item.count}
                                </span>
                            ) : null}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
                <a href="#" className="flex-shrink-0 block w-full group">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="inline-block rounded-full h-9 w-9"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        // <div className="flex flex-col flex-1 w-full max-w-xs min-h-0 bg-white">
        //     <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        //         <div className="flex items-center flex-shrink-0 px-4">
        //
        //         </div>
        //         <nav className="px-2 mt-5 space-y-1 bg-gray-800 " aria-label="Sidebar">
        //             {navigation.map((item) => (
        //                 <Link key={item.name} href={item.href} passHref>
        //                     <div
        //                         className={`${classNames(
        //                             item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        //                             'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
        //                         )} cursor-pointer`}
        //                     >
        //                         <item.icon
        //                             className={classNames(
        //                                 item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
        //                                 'mr-3 flex-shrink-0 h-6 w-6'
        //                             )}
        //                             aria-hidden="true"
        //                         />
        //                         <span className="flex-1">{item.name}</span>
        //                         {item.count ? (
        //                             <span
        //                                 className={classNames(
        //                                     item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800',
        //                                     'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
        //                                 )}
        //                             >
        //                                 {item.count}
        //                             </span>
        //                         ) : null}
        //                     </div>
        //                 </Link>
        //             ))}
        //         </nav>
        //     </div>
        //     <div className="flex flex-shrink-0 p-4 bg-gray-700">
        //         <a href="#" className="flex-shrink-0 block w-full group">
        //             <div className="flex items-center">
        //                 <div>
        //                     <img
        //                         className="inline-block rounded-full h-9 w-9"
        //                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        //                         alt=""
        //                     />
        //                 </div>
        //                 <div className="ml-3">
        //                     <p className="text-sm font-medium text-white">Tom Cook</p>
        //                     <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
        //                 </div>
        //             </div>
        //         </a>
        //     </div>
        // </div>
    );
};

export default SideBar;
