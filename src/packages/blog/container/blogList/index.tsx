import Link from 'next/link';
import { routes } from '../../../../core/routes';
import * as React from 'react';
import { BlogBox } from '../blogBox';
import { useForm } from 'react-hook-form';
import { FilterBlogListDTO, FilterBlogListFormDTO } from './interface';
import { DateField, FormWrapper, SelectBlogCategory, SelectField, TextField } from '../../../../core/components/form';
import { useGetBlogCategory } from '../../../blogCategory';
import { useStoreUser } from '../../../../core/store';
import { pushWithParams } from '../../../../core/util/router';
import { useRouter } from 'next/router';
import { useGetBlogList } from './hook';
import { UserRole } from '../../../../core/models/role';
import { allFieldData, statusFieldData } from '../../../../core/common/dataField';
interface BlogListProps extends FilterBlogListDTO {}

export const BlogList: React.FunctionComponent<BlogListProps> = ({ category, createdAt, currentPage, isShow, pageSize, title, userId }) => {
    const options = React.useMemo(
        () => ({ category, createdAt, currentPage: currentPage - 1, isShow, pageSize, title, userId }),
        [category, createdAt, currentPage, isShow, pageSize, title, userId]
    );
    const { blogList, count } = useGetBlogList(options);
    const router = useRouter();
    const userState = useStoreUser();
    const { blogCategoryList } = useGetBlogCategory();

    const methods = useForm<FilterBlogListFormDTO>({
        defaultValues: {
            title,
            category,
            createdAt,
            isShow,
        },
    });

    const _handleOnSubmit = async (data: FilterBlogListFormDTO) => {
        pushWithParams(router, routes.adminBlogListUrl, { ...options, ...data });
    };

    const _onChangeUserID = () => {
        if (userId) pushWithParams(router, routes.adminBlogListUrl, { ...options, userId: '' });
        else pushWithParams(router, routes.adminBlogListUrl, { ...options, userId: userState.id });
    };

    return (
        <FormWrapper methods={methods}>
            <div className="px-4 space-y-5 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-2xl font-semibold text-gray-900">Blogs</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the Blogs in home website including their title, category, info, details and thumbnail.
                        </p>
                    </div>
                    <div className="flex mt-4 space-x-5 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link href={routes.adminAddBlogCategory} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Add category
                            </p>
                        </Link>
                        <Link href={routes.adminAddBlogUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Add Blog
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <h2 className="text-xl font-semibold">Filter</h2>
                    <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="flex items-end justify-start space-x-5">
                        <div className="min-w-[300px]">
                            <TextField label="Title" name="title" />
                        </div>
                        <div className="">
                            <SelectField label="Showing" name="isShow" values={[allFieldData, ...statusFieldData]} />
                        </div>
                        <div className="">
                            <SelectBlogCategory label="Category" name="category" values={[{ id: '', name: 'All' }, ...blogCategoryList]} />
                        </div>
                        <div className="">
                            <DateField label="Create at" name="createdAt" />
                        </div>
                        {userState.role.name !== UserRole.ADMIN && (
                            <div
                                onClick={_onChangeUserID}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {userId ? 'All blogs' : 'My blogs'}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-8">
                    {blogList && blogList.map((item) => <BlogBox key={item.id} data={item} mode="edit" />)}
                </div>
            </div>
        </FormWrapper>
    );
};
