import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Question } from '../../../../core/models/question';
import { Quiz } from '../../../../core/models/quiz';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';
import { useGetPracticeList } from '../../common/hooks/useGetPracticeList';
import { SelectSubject } from './interface';

interface PracticeListProps {}

export const PracticeList: React.FC<PracticeListProps> = () => {
    const [subjects, setSubjects] = React.useState<SelectSubject[]>([]);
    const [quizzes, setQuizzes] = React.useState<Quiz[]>([]);
    const [count, setCount] = React.useState<number>(4);

    const { quizResults } = useGetPracticeList({ currentPage: 0, pageSize: 10, subject: '' });
    console.log(quizResults);

    const router = useRouter();

    const methods = useForm();
    const _handleOnSubmit = async () => {};

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
                        <form className="max-w-xs">
                            <SelectField
                                label="Subject"
                                values={subjects.map((subject) => ({ label: subject.name, value: subject.id }))}
                                name="Subject"
                            />
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
                                                    {/* <div className="max-w-sm"><div className="text-gray-900">{item.}</div></div> */}
                                                </TableDescription>
                                                <TableDescription>
                                                    {/* <div className="text-gray-900">{item.attendedQuestions[0].questionInQuiz.quiz.} Correct</div> */}
                                                    {/* <div className="text-gray-900">{item.questions.length} Questions</div> */}
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">
                                                        {/* {Math.round((item.correctAnswer / item.questions.length) * 100)}% */}
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${routes.practiceDetailsUrl}/${item.id}`} passHref>
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
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};
