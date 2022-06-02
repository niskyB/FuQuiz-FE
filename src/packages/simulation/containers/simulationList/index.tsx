import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Question } from '../../../../core/models/question';
import { PracticeQuiz } from '../../../../core/models/quiz';
import { routes } from '../../../../core/routes';
import { PaginationBar } from '../../../dashboard';
import { SelectSubject } from '../../../practices/containers/practiceList/interface';

interface SimulationListProps {}

const SimulationList: React.FunctionComponent<SimulationListProps> = () => {
    const [subjects, setSubjects] = React.useState<SelectSubject[]>([
        { id: '1', title: 'Javascript basic' },
        { id: '2', title: 'Javascript' },
        { id: '3', title: 'Master of coins' },
    ]);

    const [quizzes, setQuizzes] = React.useState<PracticeQuiz[]>([
        {
            id: '1',
            name: 'Quiz Practice 1',
            correctAnswer: 50,
            createdAt: '05/25/2022',
            description: 'Something is matter',
            duration: 120,
            examLevel: { id: '1', name: 'Hard' },
            quizLevel: { id: '1', name: 'Simulation' },
            passRate: 50,
            questions: Array<Question>(90),
            subject: { id: '1', title: 'Javascript basic' },
        },
        {
            id: '2',
            name: 'Quiz Practice 2',
            correctAnswer: 50,
            createdAt: '05/25/2022',
            description: 'Something is matter',
            duration: 120,
            examLevel: { id: '1', name: 'Hard' },
            quizLevel: { id: '1', name: 'Simulation' },
            passRate: 50,
            questions: Array<Question>(90),
            subject: { id: '1', title: 'Javascript basic' },
        },
        {
            id: '3',
            name: 'Quiz Practice 3',
            correctAnswer: 50,
            createdAt: '05/25/2022',
            description: 'Something is matter',
            duration: 120,
            examLevel: { id: '1', name: 'Hard' },
            quizLevel: { id: '1', name: 'Simulation' },
            passRate: 50,
            questions: Array<Question>(90),
            subject: { id: '1', title: 'Javascript basic' },
        },
        {
            id: '4',
            name: 'Quiz Practice 4',
            correctAnswer: 50,
            createdAt: '05/25/2022',
            description: 'Something is matter',
            duration: 120,
            examLevel: { id: '1', name: 'Hard' },
            quizLevel: { id: '1', name: 'Simulation' },
            passRate: 50,
            questions: Array<Question>(90),
            subject: { id: '1', title: 'Javascript basic' },
        },
    ]);
    const [count, setCount] = React.useState<number>(4);

    const router = useRouter();

    const methods = useForm();
    const _handleOnSubmit = async () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Simulation exam List</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the quiz that you attended including their subject info, simulation level, duration and pass rate.
                    </p>
                </div>
            </div>
            <div className="space-y-2">
                <FormWrapper methods={methods}>
                    <div className="flex items-end justify-between">
                        <form className="flex items-end space-x-2">
                            <SelectField
                                label="Subject"
                                values={subjects.map((subject) => ({ label: subject.title, value: subject.id }))}
                                name="Subject"
                            />
                            <TextField name="examName" label="Exam name" />
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm h-fit hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </FormWrapper>
            </div>
            <div className="flex flex-col mt-8">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <Table>
                                <TableHead fields={['Subject info', 'Simulation exam', 'Level', 'Questions', 'Duration', ' Pass rate', '']} />

                                <TableBody>
                                    {Boolean(count && quizzes) &&
                                        quizzes.map((quiz) => (
                                            <TableRow key={quiz.id}>
                                                <TableDescription>
                                                    <div className="font-semibold text-gray-900">#{quiz.id}</div>
                                                    <div className="text-gray-900">{quiz.subject.title}</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{quiz.examLevel.name}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{quiz.quizLevel.name}</div>
                                                    </div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.questions.length} Questions</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.duration} mins</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <div className="text-gray-900">{quiz.passRate} %</div>
                                                </TableDescription>
                                                <TableDescription>
                                                    <Link href={`${routes.simulationReviewListUrl}/${quiz.id}`} passHref>
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

export default SimulationList;
