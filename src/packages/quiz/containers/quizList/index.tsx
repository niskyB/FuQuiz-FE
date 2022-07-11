import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';
import { clearQuery, pushWithParams } from '../../../../core/util';
import { useGetQuizType } from '../../common/hooks/useGetQuizType';
import { allFieldData } from '../../../../core/common/dataField';
import { dataParser } from '../../../../core/util/data';
import { useGetSubjectList } from '../../../subject';
import { FilterQuizListDTO, FilterQuizListFormDTO, useGetQuizList } from '../../common/hooks/useGetQuizList';
import { useUrlParams } from '../../../../core/common/hooks/useUrlParams';
import { deleteQuiz } from './action';
import { useStoreApi } from '../../../../core/store';
import { toast } from 'react-toastify';

interface QuizListProps extends FilterQuizListDTO {}

export const QuizList: React.FunctionComponent<QuizListProps> = ({ currentPage, name, pageSize, subject, type }) => {
    const methods = useForm<FilterQuizListFormDTO>();
    const router = useRouter();

    const { errorMessage } = useStoreApi();
    React.useEffect(() => {
        if (errorMessage.length) {
            toast.warn(errorMessage);
        }
    }, [errorMessage]);

    const { quizList, count } = useGetQuizList({ currentPage, name, pageSize, subject, type });
    const { quizTypeList: QuizTypeList } = useGetQuizType();
    const { subjects } = useGetSubjectList({ pageSize: 99 });

    useUrlParams({
        defaultPath: routes.adminQuizListUrl,
        query: { ...router.query, currentPage, name, pageSize, subject, type },
    });

    const _handleOnSubmit = async (data: FilterQuizListFormDTO) => {
        pushWithParams(router, routes.adminQuizListUrl, { ...data });
    };

    const _onDeleteQuiz = (quizId: string) => {
        deleteQuiz(quizId).then(() => {
            window.location.reload();
        });
    };

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
                        <Link href={clearQuery(router.asPath).replace(routes.adminQuestionListUrl, routes.adminQuizListUrl)} passHref>
                            <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                Question List
                            </p>
                        </Link>
                    </div>
                    <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link href={clearQuery(router.asPath) + routes.adminAddQuestionUrl} passHref>
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
                                    isRequire={false}
                                    label="Subject"
                                    values={[allFieldData, ...dataParser(subjects, 'name', 'id')]}
                                    name="subject"
                                />
                                <SelectField
                                    isRequire={false}
                                    label="Quiz Type"
                                    values={[allFieldData, ...dataParser(QuizTypeList, 'description', 'id')]}
                                    name="type"
                                />
                                <TextField name="name" label="Name" isRequire={false} />
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
                                <TableHead
                                    fields={[
                                        'ID',
                                        'Name',
                                        'Subject',
                                        'Level',
                                        'Questions',
                                        'Duration (minutes)',
                                        'Pass rate (%)',
                                        'Quiz Type',
                                        '',
                                        '',
                                    ]}
                                />

                                <TableBody>
                                    {Boolean(count && quizList) &&
                                        quizList.map((quiz, index) => (
                                            <TableRow key={quiz.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">#{quiz.id}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.subject.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.level.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.questions.length}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.duration}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.passRate}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.type.description}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${clearQuery(router.asPath)}/edit/${quiz.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                    </Link>
                                                </TableDescription>
                                                <TableDescription>
                                                    <p
                                                        onClick={() => _onDeleteQuiz(quiz.id)}
                                                        className="text-red-600 cursor-pointer hover:text-red-900"
                                                    >
                                                        Delete
                                                    </p>
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
