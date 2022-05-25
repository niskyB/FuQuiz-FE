import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Question } from '../../../../core/models/question';
import { PracticeQuiz } from '../../../../core/models/quiz';
import { Subject } from '../../../../core/models/subject';
import { routes } from '../../../../core/routes';
import PaginationBar from '../../../dashboard/components/paginationBar';
import { SelectSubject } from './interface';

interface PracticeListProps {}

const PracticeList: React.FC<PracticeListProps> = () => {
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
            quizLevel: { id: '1', name: 'Practice' },
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
            quizLevel: { id: '1', name: 'Practice' },
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
            quizLevel: { id: '1', name: 'Practice' },
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
            quizLevel: { id: '1', name: 'Practice' },
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
                                values={subjects.map((subject) => ({ label: subject.title, value: subject.id }))}
                                name="Subject"
                            />
                        </form>
                        <div className="space-x-2">
                            <Link href={routes.addPracticeUrl} passHref>
                                <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                                    New Practice
                                </p>
                            </Link>
                            <Link href={routes.addSubjectUrl} passHref>
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
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Practice name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Date taken
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Type & Level
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Question Info
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Correct Answer
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">View Details</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && quizzes) &&
                                        quizzes.map((quiz) => (
                                            <tr key={quiz.id}>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{quiz.subject.title}</div>
                                                    <div className="text-gray-900">{quiz.name}</div>
                                                </td>
                                                <td className="px-3 py-4 whitespace-nowrap">
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{quiz.createdAt}</div>
                                                    </div>
                                                </td>
                                                <td className="px-3 py-4 whitespace-nowrap">
                                                    <div className="max-w-sm">
                                                        <div className="text-gray-900">{quiz.quizLevel.name}</div>
                                                        <div className="text-gray-900">{quiz.examLevel.name}</div>
                                                    </div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{quiz.correctAnswer} Correct</div>
                                                    <div className="text-gray-900">{quiz.questions.length} Questions</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">
                                                        {Math.round((quiz.correctAnswer / quiz.questions.length) * 100)}%
                                                    </div>
                                                </td>
                                                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                                    <Link href={`${routes.practiceDetailsUrl}/${quiz.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">View Details</p>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={Number(1)} numberOfItem={4} pageSize={Number(12)} routeUrl={router.asPath} />
        </div>
    );
};

export default PracticeList;
