import * as React from 'react';
import Link from 'next/link';
import { routes } from '../../../../core/routes';
import { useRouter } from 'next/router';
import { useStoreUser } from '../../../../core/store';
import { UserRole } from '../../../../core/models/role';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { useForm } from 'react-hook-form';
import { GetSliderOptionsDTO } from './interface';
import { PaginationBar } from '../../../dashboard';
import { pushWithParams } from '../../../../core/util/router';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { useGetSliderList } from '../../common/hooks/useGetSliderList';
import { useUrlParams } from '../../../../core/common/hooks/useUrlParams';
import { allFieldData, statusFieldData } from '../../../../core/common/dataField';

interface SliderProps extends GetSliderOptionsDTO {}
export const SliderList: React.FunctionComponent<SliderProps> = ({
    title,
    currentPage,
    pageSize,
    createdAt: createdAt,
    isShow,
    orderBy,
    userId,
    backLink,
}) => {
    const router = useRouter();
    const userState = useStoreUser();
    const methods = useForm<SliderProps>();
    const options = React.useMemo<GetSliderOptionsDTO>(
        () => ({
            currentPage,
            pageSize,
            title,
            userId,
            isShow,
            orderBy,
            createdAt: createdAt,
            backLink,
        }),
        [currentPage, pageSize, title, userId, isShow, orderBy, createdAt, backLink]
    );

    useUrlParams({
        defaultPath: routes.adminSliderListUrl,
        query: { ...router.query, title, currentPage, pageSize, createdAt: createdAt, isShow, orderBy, userId, backLink },
    });

    const { count, sliders } = useGetSliderList(options);

    const _handleOnSubmit = async (data: SliderProps) => {
        pushWithParams(router, routes.adminSliderListUrl, {
            ...options,
            currentPage: 1,
            pageSize: 12,
            title: data.title,
            isShow: data.isShow,
            createdAt: data.createdAt ? new Date(data.createdAt).toLocaleDateString() : '',
            backLink: data.backLink,
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
                    {userState.role.description !== UserRole.ADMIN && (
                        <button
                            onClick={() =>
                                userId
                                    ? pushWithParams(router, routes.adminSliderListUrl, { ...options, userId: '' })
                                    : pushWithParams(router, routes.adminSliderListUrl, { ...options, userId: userState.id })
                            }
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            {userId ? 'All sliders' : 'My sliders'}
                        </button>
                    )}

                    <Link href={routes.adminAddSliderUrl} passHref>
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
                            <TextField name="title" label="Title" isRequire={false} />
                            <TextField name="createdAt" label="Create From" type={'date'} isRequire={false} />
                            <TextField name="backLink" label="Back link" isRequire={false} />
                            <SelectField label="Showing" values={[allFieldData, ...statusFieldData]} name="isShow" isRequire={false} />
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
                            <Table>
                                <TableHead fields={['id', 'Image', 'Title/Date', 'Back link', 'Showing', '']} />

                                <TableBody>
                                    {Boolean(count && sliders) &&
                                        sliders.map((slider) => {
                                            return (
                                                <TableRow key={slider.id}>
                                                    <TableDescription>{slider.id}</TableDescription>
                                                    <TableDescription>
                                                        <div className="max-w-sm">
                                                            <img className="w-10 h-10" src={slider.imageUrl} alt="" />
                                                        </div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{slider.title}</div>
                                                        <div className="text-gray-900">{new Date(slider.createdAt).toLocaleDateString()}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{slider.backLink}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        {slider.isShow ? (
                                                            <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                                Active
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                                Inactive
                                                            </span>
                                                        )}
                                                    </TableDescription>
                                                    <TableDescription>
                                                        {(slider.marketing && slider.marketing.user.id === userState.id) ||
                                                        userState.role.description === UserRole.ADMIN ||
                                                        userState.id === slider.marketing?.user.id ? (
                                                            <Link href={`${routes.adminEditSliderUrl}/${slider.id}`} passHref>
                                                                <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                            </Link>
                                                        ) : (
                                                            <Link href={`${routes.adminEditSliderUrl}/${slider.id}`} passHref>
                                                                <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">View</p>
                                                            </Link>
                                                        )}
                                                    </TableDescription>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(currentPage)} numberOfItem={count} pageSize={Number(pageSize)} routeUrl={router.asPath} />
        </div>
    );
};
