import * as React from 'react';
import Link from 'next/link';
import { routes } from '../../../../core/routes';
import { useRouter } from 'next/router';
import { Slider } from '../../../../core/models/slider';
import { getFilterSlider } from './action';
import { useStoreUser } from '../../../../core/store';
import { UserRole } from '../../../../core/models/role';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { useForm } from 'react-hook-form';
import PaginationBar from '../../../dashboard/components/paginationBar';

interface SliderProps {
    currentPage?: number;
    pageSize?: number;
    title?: string;
    userId?: string;
    isShow?: boolean;
    createdAt?: Date;
    orderBy?: string;
}
export const SliderList: React.FunctionComponent<SliderProps> = ({ title, currentPage, pageSize, createdAt, isShow, orderBy }) => {
    const router = useRouter();
    const userState = useStoreUser();
    const [userId, setUserId] = React.useState('');

    const methods = useForm<SliderProps>();

    const [sliders, setSliders] = React.useState<Slider[]>([]);
    const [count, setCount] = React.useState<number>(0);

    const [filterUrl, setFilterUrl] = React.useState<string>('');

    // Default param
    React.useEffect(() => {
        pushWithParams();
    }, []);

    const pushWithParams = () => {
        router.push({
            pathname: routes.sliderListUrl,
            query: {
                currentPage,
                pageSize,
                title,
                userId,
                isShow,
                orderBy,
                createdAt: new Date(createdAt ? createdAt : '01/01/2022').toLocaleDateString(),
            },
        });
    };

    //  Filter Process
    React.useEffect(() => {
        _fetchData();
    }, [filterUrl]);

    React.useEffect(() => {
        pushWithParams();
    }, [userId]);

    React.useEffect(() => {
        setFilterUrl(router.asPath.replace(`${routes.sliderListUrl}?`, ''));
    }, [router.asPath]);

    const _fetchData = async () => {
        const filterUrlServer = filterUrl.replace(`currentPage=${Number(currentPage)}`, `currentPage=${Number(currentPage) - 1}`);
        const res = await getFilterSlider(filterUrlServer);
        console.log(res);
        setSliders(res.data);
        setCount(res.count);
    };

    // Submit filter

    const _handleOnSubmit = async (data: SliderProps) => {
        router.push({
            pathname: routes.sliderListUrl,
            query: {
                currentPage: 1,
                pageSize: 12,
                title: data.title,
                isShow: data.isShow,
                createdAt: data.createdAt ? new Date(data.createdAt).toLocaleDateString() : '',
                userId,
            },
        });
    };

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Sliders</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Sliders in home website including their title, backLink, image and isShow.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        onClick={() => (userId.length ? setUserId('') : setUserId(userState.id))}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        {userId.length ? 'All sliders' : 'My sliders'}
                    </button>
                    <Link href={routes.addSliderUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Slider
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="title" label="Title" />
                            <TextField name="createdAt" label="Create From" type={'date'} />
                            <SelectField
                                label="Showing"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                                name="isShow"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </FormWrapper>
            </div>
            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Image
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Title/Date
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Back link
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Showing
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && sliders) &&
                                        sliders.map((slider) => (
                                            <tr key={slider.id}>
                                                <td className="py-4 pl-4 pr-3 whitespace-nowrap sm:pl-6">
                                                    <div className="max-w-sm">
                                                        <img className="w-10 h-10" src={slider.imageUrl} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{slider.title}</div>
                                                    <div className="text-gray-900">{new Date(slider.createdAt).toLocaleDateString()}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{slider.backLink}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {slider.isShow ? (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                                    {slider.marketing.user.id === userState.id || userState.role.name === UserRole.ADMIN ? (
                                                        <Link href={`${routes.editSliderUrl}/${slider.id}`} passHref>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                        </Link>
                                                    ) : null}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(currentPage)} numberOfItem={count} pageSize={Number(pageSize)} routeUrl={router.asPath} />
        </div>
    );
};
