import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import {
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    PlusSmIcon,
    SearchIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon,
} from '@heroicons/react/solid';
import { BellIcon, FireIcon, HomeIcon, MenuIcon, TrendingUpIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline';
import { Slide } from '../../components/slider';
import { SliderWithoutAuthDTO } from '../../../../core/models/slider';

const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Popular', href: '#', icon: FireIcon, current: false },
    { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
];
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
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
const questions = [
    {
        id: '81614',
        likes: '29',
        replies: '11',
        views: '2.7k',
        author: {
            name: 'Dries Vincent',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        date: 'December 9 at 11:43 AM',
        datetime: '2020-12-09T11:43:00',
        href: '#',
        title: 'What would you have done differently if you ran Jurassic Park?',
        body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
    },
    // More questions...
];

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
                        <main className="lg:col-span-9 space-y-10 xl:col-span-9">
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
                                    {questions.map((question) => (
                                        <li key={question.id} className="px-4 py-6 bg-white shadow sm:p-6 sm:rounded-lg">
                                            <article aria-labelledby={'question-title-' + question.id}>
                                                <div>
                                                    <div className="flex space-x-3">
                                                        <div className="flex-shrink-0">
                                                            <img className="w-10 h-10 rounded-full" src={question.author.imageUrl} alt="" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900">
                                                                <a href={question.author.href} className="hover:underline">
                                                                    {question.author.name}
                                                                </a>
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                <a href={question.href} className="hover:underline">
                                                                    <time dateTime={question.datetime}>{question.date}</time>
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="flex self-center flex-shrink-0">
                                                            <Menu as="div" className="relative inline-block text-left">
                                                                <div>
                                                                    <Menu.Button className="flex items-center p-2 -m-2 text-gray-400 rounded-full hover:text-gray-600">
                                                                        <span className="sr-only">Open options</span>
                                                                        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
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
                                                                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                        <div className="py-1">
                                                                            <Menu.Item>
                                                                                {({ active }) => (
                                                                                    <a
                                                                                        href="#"
                                                                                        className={classNames(
                                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                            'flex px-4 py-2 text-sm'
                                                                                        )}
                                                                                    >
                                                                                        <StarIcon
                                                                                            className="w-5 h-5 mr-3 text-gray-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        <span>Add to favorites</span>
                                                                                    </a>
                                                                                )}
                                                                            </Menu.Item>
                                                                            <Menu.Item>
                                                                                {({ active }) => (
                                                                                    <a
                                                                                        href="#"
                                                                                        className={classNames(
                                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                            'flex px-4 py-2 text-sm'
                                                                                        )}
                                                                                    >
                                                                                        <CodeIcon
                                                                                            className="w-5 h-5 mr-3 text-gray-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        <span>Embed</span>
                                                                                    </a>
                                                                                )}
                                                                            </Menu.Item>
                                                                            <Menu.Item>
                                                                                {({ active }) => (
                                                                                    <a
                                                                                        href="#"
                                                                                        className={classNames(
                                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                            'flex px-4 py-2 text-sm'
                                                                                        )}
                                                                                    >
                                                                                        <FlagIcon
                                                                                            className="w-5 h-5 mr-3 text-gray-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        <span>Report content</span>
                                                                                    </a>
                                                                                )}
                                                                            </Menu.Item>
                                                                        </div>
                                                                    </Menu.Items>
                                                                </Transition>
                                                            </Menu>
                                                        </div>
                                                    </div>
                                                    <h2 id={'question-title-' + question.id} className="mt-4 text-base font-medium text-gray-900">
                                                        {question.title}
                                                    </h2>
                                                </div>
                                                <div
                                                    className="mt-2 space-y-4 text-sm text-gray-700"
                                                    dangerouslySetInnerHTML={{ __html: question.body }}
                                                />
                                                <div className="flex justify-between mt-6 space-x-8">
                                                    <div className="flex space-x-6">
                                                        <span className="inline-flex items-center text-sm">
                                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                                <ThumbUpIcon className="w-5 h-5" aria-hidden="true" />
                                                                <span className="font-medium text-gray-900">{question.likes}</span>
                                                                <span className="sr-only">likes</span>
                                                            </button>
                                                        </span>
                                                        <span className="inline-flex items-center text-sm">
                                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                                <ChatAltIcon className="w-5 h-5" aria-hidden="true" />
                                                                <span className="font-medium text-gray-900">{question.replies}</span>
                                                                <span className="sr-only">replies</span>
                                                            </button>
                                                        </span>
                                                        <span className="inline-flex items-center text-sm">
                                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                                <EyeIcon className="w-5 h-5" aria-hidden="true" />
                                                                <span className="font-medium text-gray-900">{question.views}</span>
                                                                <span className="sr-only">views</span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                    <div className="flex text-sm">
                                                        <span className="inline-flex items-center text-sm">
                                                            <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                                <ShareIcon className="w-5 h-5" aria-hidden="true" />
                                                                <span className="font-medium text-gray-900">Share</span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
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
