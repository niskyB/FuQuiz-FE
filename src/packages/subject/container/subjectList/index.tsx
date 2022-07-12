import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { allFieldData, Order, statusFieldData } from '../../../../core/common/dataField';
import { useUrlParams } from '../../../../core/common/hooks';
import { DateField, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { UserRole } from '../../../../core/models/role';
import { SubjectCategory } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';
import { useStoreUser } from '../../../../core/store';
import { pushWithParams } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { PaginationBar } from '../../../dashboard';
import { useGetSubjectCategory } from '../../common/hooks/useGetSubjectCategory';
import { useGetSubjectList } from '../../common/hooks/useGetSubjectList';
import { SubjectFilterDTO, SubjectFilterFormDTO } from './interface';

interface SubjectListProps extends SubjectFilterDTO {}

const defaultValues: SubjectFilterFormDTO = {
    category: '',
    createdAt: '',
    isActive: '',
    name: '',
    isFeature: '',
    order: Order.DESC,
};

export const SubjectList: React.FunctionComponent<SubjectListProps> = ({
    currentPage,
    pageSize,
    category,
    createdAt,
    isActive,
    name,
    isFeature,
    order,
}) => {
    const userState = useStoreUser();
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
            isActive,
            name,
            isFeature,
            order,
        }),
        [currentPage, pageSize, category, createdAt, isActive, name, isFeature, order]
    );

    useUrlParams({
        defaultPath: routes.adminRegistrationUrl,
        query: { ...router.query, currentPage, pageSize, category, createdAt, name, isFeature },
    });

    const { categories } = useGetSubjectCategory();

    const { subjects, count } = useGetSubjectList(options);
    React.useEffect(() => {
        methods.setValue('name', name);
        methods.setValue('category', category || '');
        methods.setValue('createdAt', createdAt);
        methods.setValue('isActive', isActive || '');
        methods.setValue('isFeature', isFeature || '');
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
                        A list of all the subject in home website including their name, category, number of lesson and expert.
                    </p>
                </div>
                {userState.role.description === UserRole.ADMIN && (
                    <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link href={routes.adminAddSubjectUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Add Subject
                            </p>
                        </Link>
                    </div>
                )}
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="name" label="Subject name" isRequire={false} />
                            <DateField name="createdAt" label="Create From" isRequire={false} />
                            <SelectField
                                label="Category"
                                values={[allFieldData, ...dataParser<SubjectCategory>(categories, 'description', 'id')]}
                                name="category"
                                isRequire={false}
                            />
                            <SelectField label="Active" values={[allFieldData, ...statusFieldData]} name="isActive" isRequire={false} />
                            <SelectField label="Feature" values={[allFieldData, ...statusFieldData]} name="isFeature" isRequire={false} />
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
                                <TableHead fields={['Id', 'Name', 'Category', 'Lessons', 'Expert', 'Activation', 'Feature', '']} />

                                <TableBody>
                                    {Boolean(count && subjects) &&
                                        subjects.map((subject) => (
                                            <TableRow key={subject.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{subject.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{subject.name}</div>
                                                    <div className="text-gray-900">{new Date(subject.createdAt).toLocaleDateString()}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{subject.category.description}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{subject.lessons.length} lesson(s)</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{subject.assignTo.user.fullName}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    {subject.isActive ? (
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
                                                    {subject.isFeature ? (
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
                                                    <Link href={`${routes.adminSubjectListUrl}/${subject.id}/edit`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Overview</p>
                                                    </Link>
                                                    <Link href={`${routes.adminSubjectListUrl}/${subject.id}${routes.adminLessonListUrl}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Lessons</p>
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
            <PaginationBar currentPage={currentPage} numberOfItem={count} pageSize={pageSize} routeUrl={router.asPath} />
        </div>
    );
};
