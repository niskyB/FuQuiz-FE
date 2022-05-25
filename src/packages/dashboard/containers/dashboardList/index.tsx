const tabs = [
    { name: 'Subjects', href: '#', current: true },
    { name: 'Customers', href: '#', current: false },
    { name: 'Registrations', href: '#', current: false },
    { name: 'Revenues', href: '#', current: false },
    { name: 'Order Counts', href: '#', current: false },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

interface DashboardListProps {}

export const DashboardList: React.FunctionComponent<DashboardListProps> = () => {
    return (
        <>
            <div className="min-h-full">
                <div className="py-10">
                    <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-full lg:px-8 lg:grid lg:grid-cols-12 lg:gap-[9.5rem]">
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
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};
