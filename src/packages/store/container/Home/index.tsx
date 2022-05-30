import { BookOpenIcon, FireIcon, HomeIcon, PencilIcon } from '@heroicons/react/outline';
import { Slide } from '../../../slider/containers/slide';
import { SliderWithoutAuthDTO } from '../../../../core/models/slider';
import { defaultCurrentUser } from '../../../../core/store/user';
import { BlogBox } from '../../../blog';
import { routes } from '../../../../core/routes';
import * as React from 'react';
import { Subject } from '../../../../core/models/subject';
import Link from 'next/link';
import { useGetBlogList } from '../../../blog/container/blogList/hook';

const navigation = [
    { name: 'Home', href: routes.homeUrl, icon: HomeIcon, current: true },
    { name: 'Popular', href: '#', icon: FireIcon, current: false },
    { name: 'Blog', href: routes.blogListUrl, icon: PencilIcon, current: false },
    { name: 'Course', href: routes.subjectListUrl, icon: BookOpenIcon, current: false },
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
    { id: 'blog', name: 'Blog', href: '#', current: true },
    { id: 'course', name: 'Course', href: '#', current: false },
];

const slideList: SliderWithoutAuthDTO[] = [
    {
        id: '1',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: false,
        title: 'hehe1',
        createdAt: '',
    },
    {
        id: '2',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe2',
        createdAt: '',
    },
    {
        id: '3',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe3',
        createdAt: '',
    },
    {
        id: '4',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe4',
        createdAt: '',
    },
    {
        id: '5',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        createdAt: '',
        title: 'hehe5',
    },
    {
        id: '6',
        backLink: '',
        imageUrl:
            'https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
        isShow: true,
        title: 'hehe6',
        createdAt: '',
    },
];
const subjectList: Subject[] = [
    {
        id: '1',
        subjectCategory: { id: '1', name: 'Coding' },
        createAt: '',
        description:
            'Nếu như vài năm trước đây JavaScript chỉ là một ngôn ngữ lập trình ít người quan tâm thì gần đây cùng với sự phát triển mạnh mẽ của HTML5, Boostrap, NodeJs đã biến JavaScript thành một trong 2 ngôn ngữ lập trình, thiết kế web quan trọng nhất. Do vậy, nắm rõ về JavaScript sẽ giúp bạn có lợi thế lớn trong công việc. <br/> Hiểu được nhu cầu tìm hiểu về JavaScript ngày càng lớn hiện nay, tôi cùng Edumall đã hợp tác sản suất khóa học "Một giờ học JavaScript" nhằm giúp các bạn nắm được kiến thức và lập trình được các chương trình cơ bản chỉ trong 1 giờ. ',
        thumbnailUrl:
            'https://edumall.vn/_next/image?url=%2Fapi%2Fimageproxy%3Furl%3Dhttps%253A%252F%252Fcdn2.topica.vn%252F191ab4fd-9c62-4494-b209-51f86a3924d3%252Fproduct%252F604f1ada9a780e00257881c3&w=1920&q=50',
        title: 'Nhập môn ngôn ngữ lập trình Javascript',
        updateAt: '',
        tagLine: '',
        assignTo: defaultCurrentUser,
    },
    {
        id: '2',
        subjectCategory: { id: '2', name: 'Crypyo' },
        createAt: '',
        description:
            'Khóa học cung cấp cho học viên sẽ 1 cái nhìn toàn diện việc bảo vệ tiền số, bảo vệ thông tin tài sản. Học viên sẽ nắm được những kĩ năng và kiến thức cơ bản, cần thiết về bảo vệ không chỉ tiền số mà còn là thông tin và tài sản số nói chung.',
        thumbnailUrl: 'https://www.stepn.com/img/coin.svg',
        title: 'Cách để GST to to moon cùng anh Quyết',
        updateAt: '',
        tagLine: '',
        assignTo: defaultCurrentUser,
    },
    {
        id: '3',
        subjectCategory: { id: '2', name: 'Health care' },
        createAt: '',
        description:
            'Kỹ thuật chạy bộ đúng cách sẽ giúp bạn nhận được nhiều lợi ích sức khỏe, cảm thấy cơ thể thư giãn, rèn luyện được sức bền lâu hơn và ngăn ngừa nguy cơ gặp chấn thương. Vậy làm thế nào để bạn chạy bộ đúng cách nhằm bảo vệ sức khỏe tốt hơn?',
        thumbnailUrl: 'https://norskmedia.vn/wp-content/uploads/2020/06/running_cover_1.jpg',
        title: 'Mẹo chaỵ bộ 10km không mệt nghỉ bằng giấc ngủ',
        updateAt: '',
        tagLine: '',
        assignTo: defaultCurrentUser,
    },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

interface HomeProps {}

type TabContent = 'blog' | 'course';

export const Home: React.FunctionComponent<HomeProps> = () => {
    const options = React.useMemo(() => ({ category: '', createdAt: '', currentPage: 0, isShow: true, pageSize: 10, title: '', userId: '' }), []);
    const { blogList } = useGetBlogList(options);
    const [tabOpening, setTabOpening] = React.useState<TabContent>('course');

    const renderContent = () => {
        switch (tabOpening) {
            case 'blog':
                return (
                    <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
                        {blogList && blogList.map((item) => <BlogBox key={item.id} data={item} mode="view" />)}
                    </div>
                );
            case 'course':
                return (
                    <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
                        {subjectList.map((item) => (
                            <Link key={item.id} href={`${routes.subjectUrl}/${item.id}`} passHref>
                                <div className="flex flex-col w-full overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5">
                                    <div className="min-w-full mx-auto bg-white">
                                        <img className="object-cover h-48 py-3 mx-auto" src={item.thumbnailUrl} alt="thumbnail" />
                                    </div>

                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-indigo-600">
                                                <Link href={''}>
                                                    <a className="hover:underline">{item.subjectCategory.name}</a>
                                                </Link>
                                            </p>
                                            <a href={''} className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                                                <p className="mt-3 text-base text-gray-500">{item.description.substring(0, 100) + '...'}</p>
                                            </a>
                                        </div>

                                        <div className="flex items-center mt-6">
                                            <p className="text-2xl font-medium text-gray-900">
                                                <div className="text-orange-600">20.000đ - 100.000đ</div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                );
        }
    };
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
                            <Slide slideList={slideList} />
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
                                            <div
                                                onClick={() => setTabOpening(tab.id as 'blog' | 'course')}
                                                key={tab.name}
                                                aria-current={tab.current ? 'page' : undefined}
                                                className={classNames(
                                                    tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                                    tabIdx === 0 ? 'rounded-l-lg' : '',
                                                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                                    'group relative min-w-0 flex-1 cursor-pointer overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                                                )}
                                            >
                                                <span>{tab.name}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        tab.id === tabOpening ? 'bg-rose-500' : 'bg-transparent',
                                                        'absolute inset-x-0 bottom-0 h-0.5'
                                                    )}
                                                />
                                            </div>
                                        ))}
                                    </nav>
                                </div>
                            </div>

                            <div className="mt-4 space-y-5">{renderContent()}</div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};
