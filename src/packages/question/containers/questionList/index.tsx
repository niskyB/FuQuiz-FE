import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Answer } from '../../../../core/models/answer';
import { Question } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';

interface QuestionListProps {}

const QuestionList: React.FunctionComponent<QuestionListProps> = () => {
    const methods = useForm();
    const router = useRouter();

    const cloneAnswers: Answer[] = [];

    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [count, setCount] = React.useState<number>(4);

    const _handleOnSubmit = async () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Question List</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all question in current quiz including Subject, Lesson, Dimension, Content, Level and active status.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={router.asPath + '/import'} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Import
                        </p>
                    </Link>
                    <Link href={router.asPath.replace(routes.adminQuestionListUrl, routes.adminQuizListUrl)} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Quiz List
                        </p>
                    </Link>
                    <Link href={router.asPath + routes.adminAddQuestionUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Question
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex flex-col space-y-2">
                            <div className="flex space-x-4">
                                <SelectField
                                    require={false}
                                    label="Subject"
                                    values={[
                                        { label: 'Subject 1', value: '1' },
                                        { label: 'Subject 2', value: '2' },
                                        { label: 'Subject 3', value: '3' },
                                        { label: 'Subject 4', value: '4' },
                                    ]}
                                    name="subject"
                                />
                                <SelectField
                                    require={false}
                                    label="Lesson"
                                    values={[
                                        { label: 'Lesson 1', value: '1' },
                                        { label: 'Lesson 2', value: '2' },
                                        { label: 'Lesson 3', value: '3' },
                                        { label: 'Lesson 4', value: '4' },
                                    ]}
                                    name="lesson"
                                />
                                <SelectField
                                    require={false}
                                    label="Dimension"
                                    values={[
                                        { label: 'Dimension 1', value: '1' },
                                        { label: 'Dimension 2', value: '2' },
                                        { label: 'Dimension 3', value: '3' },
                                        { label: 'Dimension 4', value: '4' },
                                    ]}
                                    name="dimension"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <TextField name="content" label="Content" isRequire={false} />
                                <SelectField
                                    require={false}
                                    label="Level"
                                    values={[
                                        { label: 'Easy', value: '1' },
                                        { label: 'Dimension 2', value: '2' },
                                        { label: 'Dimension 3', value: '3' },
                                    ]}
                                    name="Level"
                                />
                                <SelectField
                                    require={false}
                                    label="Status"
                                    values={[
                                        { label: 'Active', value: true },
                                        { label: 'Inactive', value: false },
                                    ]}
                                    name="isActive"
                                />
                            </div>
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
                                <TableHead fields={['ID', 'Subject', 'Lesson', 'Dimension', 'Content', 'Level', 'Showing', '']} />

                                <TableBody>
                                    {Boolean(count && questions) &&
                                        questions.map((question, index) => (
                                            <TableRow key={question.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">#{question.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">Subject 1</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">Lesson 1</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{question.dimension.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{question.content}</div>
                                                </TableDescription>
                                                <TableDescription>Easy</TableDescription>

                                                <TableDescription>
                                                    {question.isActive ? (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                            Showing
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${router.asPath}/edit/${question.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
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

export default QuestionList;
