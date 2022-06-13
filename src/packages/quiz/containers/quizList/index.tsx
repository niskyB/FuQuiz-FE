import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Answer, Question } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';

interface QuizListProps {}

export const QuizList: React.FunctionComponent<QuizListProps> = () => {
    const methods = useForm();
    const router = useRouter();

    const cloneAnswers: Answer[] = [{ id: '1', answerContent: 'Answer 1' }];

    const [quizzes, setQuizzes] = React.useState([
        {
            id: 'q1',
            answers: cloneAnswers,
            content: 'Question 1',
            isActive: true,
            // lessonAttribute: { id: 'l1', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 1', type: { id: '1', name: '' } },
        },
        {
            id: 'q2',
            answers: cloneAnswers,
            content: 'Question 2',
            isActive: true,
            // lessonAttribute: { id: 'l2', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 2', type: { id: '1', name: '' } },
        },
        {
            id: 'q3',
            answers: cloneAnswers,
            content: 'Question 3',
            isActive: true,
            // lessonAttribute: { type: { id: 'l3', name: 'Quiz' } },
            dimension: { id: '', description: '', name: 'Domain 3', type: { id: '1', name: '' } },
        },
        {
            id: 'q4',
            answers: cloneAnswers,
            content: 'Question 4',
            isActive: true,
            // lessonAttribute: { id: 'l4', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 4', type: { id: '1', name: '' } },
        },
    ]);
    const [count, setCount] = React.useState<number>(4);

    const _handleOnSubmit = async () => {};
    console.log(router.asPath);

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Quiz List</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all quiz including ID, Name, Subject, Level, Questions, Duration, Pass rate and Quiz type.
                    </p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                    <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link href={router.asPath.replace(routes.adminQuestionListUrl, routes.adminQuizListUrl)} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Question List
                            </p>
                        </Link>
                    </div>
                    <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link href={router.asPath + routes.adminAddQuestionUrl} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Add Quiz
                            </p>
                        </Link>
                    </div>
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
                                    label="Quiz Type"
                                    values={[
                                        { label: 'Simulation', value: '1' },
                                        { label: 'Lesson 2', value: '2' },
                                        { label: 'Lesson 3', value: '3' },
                                        { label: 'Lesson 4', value: '4' },
                                    ]}
                                    name="lesson"
                                />
                                <TextField name="name" label="Name" require={false} />
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
                                <TableHead fields={['ID', 'Name', 'Subject', 'Level', 'Questions', 'Duration', 'Pass rate', 'Quiz Type', '', '']} />

                                <TableBody>
                                    {Boolean(count && quizzes) &&
                                        quizzes.map((quiz, index) => (
                                            <TableRow key={quiz.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">#{quiz.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">Quiz Name 1</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">Subject 1</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">Easy</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">60 questions</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">60 minutes</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">60%</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">Simulation</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${router.asPath}/edit/${quiz.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${router.asPath}/edit/${quiz.id}`} passHref>
                                                        <p className="text-red-600 cursor-pointer hover:text-red-900">Delete</p>
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
