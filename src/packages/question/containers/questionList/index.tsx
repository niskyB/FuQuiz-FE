import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Answer, Question } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import PaginationBar from '../../../dashboard/components/paginationBar';

interface QuestionListProps {}

const QuestionList: React.FunctionComponent<QuestionListProps> = () => {
    const methods = useForm();
    const router = useRouter();

    const cloneAnswers: Answer[] = [
        { id: '1', answerContent: 'Answer 1' },
        { id: '2', answerContent: 'Answer 2' },
        { id: '3', answerContent: 'Answer 3' },
        { id: '4', answerContent: 'Answer 4' },
    ];

    const [questions, setQuestions] = React.useState<Question[]>([
        {
            id: 'q1',
            answers: cloneAnswers,
            content: 'Question 1',
            isActive: true,
            lessonType: { id: 'l1', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 1', typeId: { id: '1', name: '' } },
        },
        {
            id: 'q2',
            answers: cloneAnswers,
            content: 'Question 2',
            isActive: true,
            lessonType: { id: 'l2', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 2', typeId: { id: '1', name: '' } },
        },
        {
            id: 'q3',
            answers: cloneAnswers,
            content: 'Question 3',
            isActive: true,
            lessonType: { id: 'l3', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 3', typeId: { id: '1', name: '' } },
        },
        {
            id: 'q4',
            answers: cloneAnswers,
            content: 'Question 4',
            isActive: true,
            lessonType: { id: 'l4', name: 'Quiz' },
            dimension: { id: '', description: '', name: 'Domain 4', typeId: { id: '1', name: '' } },
        },
    ]);
    const [count, setCount] = React.useState<number>(4);

    const _handleOnSubmit = async () => {};

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Questions</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all question in current quiz including Question, Dimension, and active status.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={router.asPath + '/add'} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Question
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex space-x-4">
                            <TextField name="content" label="Question" />
                            <SelectField
                                label="Dimension"
                                values={[
                                    { label: 'Dimension 1', value: '1' },
                                    { label: 'Dimension 2', value: '2' },
                                    { label: 'Dimension 3', value: '3' },
                                    { label: 'Dimension 4', value: '4' },
                                ]}
                                name="isActive"
                            />
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
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Question
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Dimension
                                        </th>

                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Activation
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Boolean(count && questions) &&
                                        questions.map((question, index) => (
                                            <tr key={question.id}>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{question.content}</div>
                                                </td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    <div className="text-gray-900">{question.dimension.name}</div>
                                                </td>

                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {question.isActive ? (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                                                    <Link href={`${router.asPath}/edit/${question.id}`} passHref>
                                                        <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
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

export default QuestionList;
