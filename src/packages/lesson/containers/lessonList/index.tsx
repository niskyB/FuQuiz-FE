import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Lesson, LessonType } from '../../../../core/models/lesson';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';

interface LessonListProps {}

const LessonList: React.FunctionComponent<LessonListProps> = () => {
    const methods = useForm();
    const [lessons, setLessons] = React.useState<Lesson[]>([
        {
            id: '1',
            createAt: '05/18/2022',
            isActive: true,
            lessonAttribute: { type: { id: '1', name: LessonType.LESSON_DETAIL }, attribute: null },
            name: 'Bài 1: Type cơ bản',
            updateAt: '05/18/2022',
            order: 1,
        },
        {
            id: '2',
            createAt: '05/18/2022',
            isActive: true,
            lessonAttribute: { type: { id: '1', name: LessonType.TOPIC_LESSON }, attribute: null },
            name: 'Bài 1: Type cơ bản',
            updateAt: '05/18/2022',
            order: 2,
        },
        {
            id: '3',
            createAt: '05/18/2022',
            isActive: true,
            lessonAttribute: { type: { id: '1', name: LessonType.QUIZ_LESSON }, attribute: null },
            name: 'Bài 1: Type cơ bản',
            updateAt: '05/18/2022',
            order: 3,
        },
    ]);
    const [count, setCount] = React.useState<number>(4);

    const _handleOnSubmit = async () => {};

    const router = useRouter();
    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Subject Lessons</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all lesson of subject in home website including their title, lesson type, date and activation.
                    </p>
                </div>
                <div className="flex flex-col items-end mt-4 space-y-2 sm:mt-0 sm:ml-16">
                    <div className="space-x-2">
                        <Link href={router.asPath + routes.adminDimensionListUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Dimension
                            </p>
                        </Link>
                        <Link href={router.asPath + routes.adminPackageListUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Package
                            </p>
                        </Link>
                        <Link href={router.asPath + routes.adminQuestionListUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Question
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link href={router.asPath + routes.addLessonUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Add Lesson
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="title" label="Title" />
                            <SelectField
                                label="Lesson Type"
                                values={[
                                    { label: 'Subject Topic', value: 'domain' },
                                    { label: 'Lesson', value: 'domain 1' },
                                    { label: 'Quiz', value: 'domain 2' },
                                ]}
                                name="isActive"
                            />
                            <TextField name="createdAt" label="Create From" type={'date'} />
                            <TextField name="updateAt" label="Update date" type={'date'} />
                            <SelectField
                                label="Active"
                                values={[
                                    { label: 'Active', value: true },
                                    { label: 'Inactive', value: false },
                                ]}
                                name="isActive"
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
                            <Table>
                                <TableHead fields={['Title', 'Lesson Type', 'Create at', 'Update date', 'Activation', '']} />
                                <TableBody>
                                    {Boolean(count && lessons) &&
                                        lessons.map((lesson) => (
                                            <TableRow key={lesson.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{lesson.name}</div>
                                                </TableDescription>

                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{lesson.lessonAttribute.type.name}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{lesson.createAt}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{lesson.updateAt}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    {lesson.isActive ? (
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
                                                    <Link href={`${router.asPath}${routes.editLessonUrl}/${lesson.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                    <Link
                                                        href={`${router.asPath}${routes.lessonListUrl}/${lesson.id}${routes.questionListUrl}`}
                                                        passHref
                                                    >
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

export default LessonList;
