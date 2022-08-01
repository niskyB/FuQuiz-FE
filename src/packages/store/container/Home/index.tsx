import { Slide } from '../../../slider/containers/slide';
import { BlogBox, useGetBlogList } from '../../../blog';
import { routes } from '../../../../core/routes';
import * as React from 'react';
import Link from 'next/link';
import { useGetSliderList } from '../../../slider';
import { GetSliderOptionsDTO } from '../../../slider/containers/sliderList/interface';
import { SubjectFilterDTO } from '../../../subject/container/subjectList/interface';
import { FilterBlogListDTO } from '../../../blog/container/blogList/interface';
import { SideBlog } from '../../../blog/container/sideBlog';
import Contact from '../Contact';
import { useGetSubjectList } from '../../../subject';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import { toast } from 'react-toastify';

const tabs = [
    { id: 'blog', name: 'Blog', href: '#', current: true },
    { id: 'course', name: 'Course', href: '#', current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

interface HomeProps {}

type TabContent = 'blog' | 'course';

export const Home: React.FunctionComponent<HomeProps> = () => {
    const router = useRouter();

    const [tabOpening, setTabOpening] = React.useState<TabContent>('blog');

    const blogListOptions = React.useMemo<Partial<FilterBlogListDTO>>(() => ({ currentPage: 1, isShow: true, pageSize: 10 }), []);

    const subjectFilterOption = React.useMemo<Partial<SubjectFilterDTO>>(() => ({ currentPage: 1, pageSize: 10, isActive: true }), []);
    const sliderOptions = React.useMemo<Partial<GetSliderOptionsDTO>>(() => ({ isShow: true, currentPage: 1, pageSize: 20 }), []);

    const { blogList } = useGetBlogList(blogListOptions);

    const { sliders } = useGetSliderList(sliderOptions);
    const { subjects } = useGetSubjectList(subjectFilterOption);

    React.useEffect(() => {
        if (router.query?.resultCode != '0') toast.error('Something went wrong, please try again later');
        if (router.query?.notification && router.query?.resultCode == '0') toast.success(router.query.notification);
    }, [router.query]);

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
                        {subjects.map((item) => (
                            <Link key={item.id} href={`${routes.subjectUrl}/${item.id}`} passHref>
                                <div className="flex flex-col w-full overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer hover:-translate-y-5">
                                    <div className="min-w-full mx-auto bg-white">
                                        <img className="object-cover h-48 py-3 mx-auto" src={item.thumbnailUrl} alt="thumbnail" />
                                    </div>

                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-indigo-600">
                                                <Link href={''}>
                                                    <a className="hover:underline">{item.category.description}</a>
                                                </Link>
                                            </p>
                                            <a href={''} className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900">{item.name}</p>
                                                <p className="mt-3 text-sm text-gray-500">{item.tagLine}</p>
                                                <p className="mt-3 text-base text-gray-500">{item.description.substring(0, 100) + '...'}</p>
                                            </a>
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
                        <div className="block lg:col-span-4">
                            <nav aria-label="Sidebar" className="sticky divide-y divide-gray-300 top-4">
                                <div className="pb-8 space-y-10">
                                    <SideBlog />
                                    <Contact />
                                </div>
                            </nav>
                        </div>
                        <main className="space-y-10 lg:col-span-8">
                            <Slide slideList={sliders} />
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
