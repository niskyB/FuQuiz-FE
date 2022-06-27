import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { PracticeListPageProps } from '../../../../../pages/practices';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { useUrlParams } from '../../../../core/common/hooks';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { RegistrationStatus } from '../../../../core/models/registration';
import { Subject } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';
import { pushWithParams } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { useGetRegistrationUserList } from '../../../course/hooks/useGetRegistrationListUser';
import { PaginationBar } from '../../../dashboard';
import { useGetPracticeList } from '../../common/hooks/useGetPracticeList';

interface PracticeListProps extends PracticeListPageProps {}

export const PracticeList: React.FC<PracticeListProps> = ({ currentPage, pageSize, subject }) => {
    const { registrationList } = useGetRegistrationUserList({ currentPage: 1, pageSize: 999, status: RegistrationStatus.PAID });

    const options = React.useMemo(() => ({ currentPage, pageSize, subject }), [currentPage, pageSize, subject]);

    const { quizResults, count } = useGetPracticeList(options);
    const router = useRouter();

    useUrlParams({
        defaultPath: routes.practiceListUrl,
        query: { ...router.query, currentPage, pageSize, subject },
    });

    const subjects = React.useMemo<Subject[]>(() => {
        let subjects: Subject[] = [];
        registrationList.map((registration) => {
            registration.pricePackage.subject && subjects.push(registration.pricePackage.subject);
        });
        return subjects;
    }, [registrationList]);

    const methods = useForm<PracticeListProps>();

    const _handleOnSubmit = (data: PracticeListProps) => {
        pushWithParams(router, routes.practiceListUrl, { ...options, ...data });
    };

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Practice List</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the quiz that you attended including their info, date taken, number of question and correct answer.
                    </p>
                </div>
            </div>
            <div className="space-y-2">
                <FormWrapper methods={methods}>
                    <div className="flex items-end justify-between">
                        <form className="flex items-end max-w-xs space-x-2" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                            <SelectField label="Subject" values={[unsetFieldData, ...dataParser(subjects, 'name', 'id')]} name="subject" />
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Search
                            </button>
                        </form>
                        <div className="space-x-2">
                            <Link href={routes.addPracticeUrl} passHref>
                                <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                    New Practice
                                </p>
                            </Link>
                            <Link href={routes.simulationListUrl} passHref>
                                <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                    Simulation Exam
                                </p>
                            </Link>
                        </div>
                    </div>
                </FormWrapper>
            </div>
            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <Table>
                                <TableHead fields={['Practice name', 'Date taken', 'Type & Level', 'Practice Info', 'Correct Answer', '']} />

                                <TableBody>
                                    {Boolean(count && quizResults) &&
                                        quizResults.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableDescription>
                                                    <div className="text-gray-900">{item.attendedQuestions[0].questionInQuiz.quiz.name}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{item.createdAt}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">
                                                            {item.attendedQuestions[0].questionInQuiz.quiz.level
                                                                ? item.attendedQuestions[0].questionInQuiz.quiz.level?.name
                                                                : ''}
                                                        </div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    {/* <div className="text-gray-900">{item.attendedQuestions[0].questionInQuiz.quiz.} Correct</div> */}
                                                    <div className="text-gray-900">{item.attendedQuestions.length} Questions</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{Math.round(item.rate * item.attendedQuestions.length)}%</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${routes.reviewQuizResultUrl}/${item.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">View Details</p>
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
            <PaginationBar currentPage={Number(currentPage)} numberOfItem={count} pageSize={Number(pageSize)} routeUrl={router.asPath} />
        </div>
    );
};
