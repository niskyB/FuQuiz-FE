import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, statusFieldData } from '../../../../core/common/dataField';
import { DateField, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { BlogCategory } from '../../../../core/models/blog';
import { routes } from '../../../../core/routes';
import { pushWithParams } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { useGetBlogCategoryList } from '../../../blogCategory';
import { PaginationBar } from '../../../dashboard';
import { useGetSubjectCategory } from '../../common/hooks/useGetSubjectCategory';
import { useGetSubjectList } from '../../common/hooks/useGetSubjectList';
import { SubjectFilterDTO, SubjectFilterFormDTO } from './interface';

interface SubjectListProps extends SubjectFilterDTO {}

const defaultValues: SubjectFilterFormDTO = {
    category: '',
    createdAt: '',
    isActive: true,
    name: '',
};

export const SubjectList: React.FunctionComponent<SubjectListProps> = ({ currentPage, pageSize, category, createdAt, isActive, name }) => {
    const router = useRouter();
    const methods = useForm<SubjectFilterFormDTO>({
        defaultValues,
    });
    const options: SubjectFilterDTO = React.useMemo(
        () => ({
            currentPage,
            pageSize,
            category,
            createdAt,
            isActive: isActive || true,
            name,
        }),
        [currentPage, pageSize, category, createdAt, isActive, name]
    );

    const { categories } = useGetSubjectCategory();

    const { subjects, count } = useGetSubjectList(options);
    React.useEffect(() => {
        methods.setValue('name', name);
        methods.setValue('category', category || '');
        methods.setValue('createdAt', createdAt);
        methods.setValue('isActive', isActive || true);
    }, [options]);

    const _handleOnSubmit = async (data: any) => {
        pushWithParams(router, routes.adminSubjectListUrl, { ...options, ...data });
    };
    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Subjects</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the subject in home website including their title, category, info and expert.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={routes.adminSubjectCategoryListUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Subject category
                        </p>
                    </Link>
                    <Link href={routes.adminAddSubjectUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Subject
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="name" label="Subject name" />
                            <DateField name="createdAt" label="Create From" />
                            <SelectField
                                label="Category"
                                values={[allFieldData, ...dataParser<BlogCategory>(categories, 'name', 'id')]}
                                name="category"
                            />
                            <SelectField label="Active" values={statusFieldData} name="isActive" />
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
                                <TableHead fields={['Title', 'Category', 'Info', 'Expert', 'Activation', '']} />

                                <TableBody>
                                    {Boolean(count && subjects) &&
                                        subjects.map((subject) => (
                                            <TableRow key={subject.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{subject.name}</div>
                                                    <div className="text-gray-900">{new Date(subject.createdAt).toLocaleDateString()}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{subject.category.name}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{subject.description}</div>
                                                    <div className="text-gray-900">36 lessons</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{subject.assignTo.user.fullName}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    {subject ? (
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
                                                    <Link href={`${routes.adminEditSubjectUrl}/${subject.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                    <Link href={`${routes.adminSubjectListUrl}/${subject.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Detail</p>
                                                    </Link>
                                                </TableDescription>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};
