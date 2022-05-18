import { FireIcon, HomeIcon, TrendingUpIcon, UserGroupIcon } from '@heroicons/react/outline';
import { Slide } from '../slider';
import { SliderWithoutAuthDTO } from '../../../../core/models/slider';
import { Blog } from '../blog/interface.dto';
import { BlogPost } from '../blog';

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Popular', href: '#', icon: FireIcon, current: false },
    { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
];

const communities = [
    { name: 'Movies', href: '#' },
    { name: 'Food', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Animals', href: '#' },
    { name: 'Science', href: '#' },
    { name: 'Dinosaurs', href: '#' },
    { name: 'Talents', href: '#' },
    { name: 'Gaming', href: '#' },
];
const tabs = [
    { name: 'Recent', href: '#', current: true },
    { name: 'Most Liked', href: '#', current: false },
    { name: 'Most Answers', href: '#', current: false },
];

const blogList: Blog[] = [];

const slideList: SliderWithoutAuthDTO[] = [
    {
        id: '1',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe1',
    },
    {
        id: '2',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe2',
    },
    {
        id: '3',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe3',
    },
    {
        id: '4',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe4',
    },
    {
        id: '5',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe5',
    },
    {
        id: '6',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe6',
    },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <div className="min-h-full">
                <div className="py-10">
                    <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                            <nav aria-label="Sidebar" className="sticky divide-y divide-gray-300 top-4">
                                <div className="pb-8 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50',
                                                'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                    'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                                )}
                                                aria-hidden="true"
                                            />
                                            <span className="truncate">{item.name}</span>
                                        </a>
                                    ))}
                                </div>
                                <div className="pt-10">
                                    <p className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase" id="communities-headline">
                                        My communities
                                    </p>
                                    <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                                        {communities.map((community) => (
                                            <a
                                                key={community.name}
                                                href={community.href}
                                                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                <span className="truncate">{community.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <main className="space-y-10 lg:col-span-9 xl:col-span-9">
                            <div className="px-4 sm:px-0">
                                <div className="sm:hidden">
                                    <label htmlFor="question-tabs" className="sr-only">
                                        Select a tab
                                    </label>
                                    <select
                                        id="question-tabs"
                                        className="block w-full text-base font-medium text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                                    >
                                        {tabs.map((tab) => (
                                            <option key={tab.name}>{tab.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="hidden sm:block">
                                    <nav className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                                        {tabs.map((tab, tabIdx) => (
                                            <a
                                                key={tab.name}
                                                href={tab.href}
                                                aria-current={tab.current ? 'page' : undefined}
                                                className={classNames(
                                                    tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                                    tabIdx === 0 ? 'rounded-l-lg' : '',
                                                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                                    'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                                                )}
                                            >
                                                <span>{tab.name}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        tab.current ? 'bg-rose-500' : 'bg-transparent',
                                                        'absolute inset-x-0 bottom-0 h-0.5'
                                                    )}
                                                />
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="mt-4 space-y-5">
                                <Slide slideList={slideList} />
                                <h1 className="sr-only">Recent questions</h1>
                                <ul role="list" className="space-y-4">
                                    {blogList.map((blog) => (
                                        <BlogPost data={blog} key={blog.id} />
                                    ))}
                                </ul>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};
