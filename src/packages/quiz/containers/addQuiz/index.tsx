import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Answer, Question } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { checkFileType } from '../../../../core/util/file';
import { RedStar } from '../../../store';

interface AddQuizProps {}

const mapFields = [{ label: 'Name', name: 'name' }];

export const AddQuiz: React.FunctionComponent<AddQuizProps> = () => {
    const [imageUrl, setImageUrl] = React.useState<string>('');
    const cloneAnswers: Answer[] = [{ id: '1', answerContent: 'Answer 1' }];
    const [questions, setQuestions] = React.useState<Question[]>([
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

    const methods = useForm();
    const router = useRouter();

    const _handleOnSubmit = async () => {};

    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-2xl font-medium leading-6 text-gray-900">Adding Quiz</h1>
                            <p className="max-w-2xl mt-1 text-xl text-gray-500">This page will be add new quiz</p>
                        </div>
                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div>
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
                                <p className="max-w-2xl mt-1 text-sm text-gray-500">General quiz setting</p>
                            </div>
                            {mapFields.map((item) => (
                                <div
                                    key={item.name}
                                    className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                                >
                                    <div className="flex justify-start space-x-2">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            {item.label}
                                        </label>
                                        <RedStar />
                                    </div>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name={item.name} type="text" />
                                    </div>
                                </div>
                            ))}
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="content" className="flex space-x-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    <p>Subject</p>
                                    <RedStar />
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <SelectField
                                        label=""
                                        name="dimension"
                                        values={[
                                            { label: 'Subject 1', value: '1' },
                                            { label: 'Subject 2', value: '2' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="content" className="flex space-x-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    <p>Exam level</p>
                                    <RedStar />
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <SelectField
                                        label=""
                                        name="dimension"
                                        values={[
                                            { label: 'Easy', value: '1' },
                                            { label: 'Medium', value: '2' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <div className="flex justify-start space-x-2">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Duration (minutes)
                                    </label>
                                    <RedStar />
                                </div>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name={'Duration'} type="number" min={0} />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <div className="flex justify-start space-x-2">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Pass rate
                                    </label>
                                    <RedStar />
                                </div>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <TextField label="" name={'passRate'} type="number" min={0} max={100} />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="content" className="flex space-x-2 text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    <p>Quiz Type</p>
                                    <RedStar />
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <SelectField
                                        label=""
                                        name="dimension"
                                        values={[
                                            { label: 'Simulation', value: '1' },
                                            { label: 'Practice', value: '2' },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div>
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Setting</h2>
                                <p className="flex max-w-2xl mt-1 text-sm text-gray-500">
                                    Choose question for quiz <p className="ml-1 font-semibold text-red-600">(will reset if change subject)</p>
                                </p>
                            </div>
                            <div className="px-4 space-y-4 sm:px-6 lg:px-4">
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto">
                                        <h1 className="text-xl font-semibold text-gray-900">Question List</h1>
                                        <p className="mt-2 text-sm text-gray-700">
                                            A list of all question in current quiz including Subject, Lesson, Dimension, Content, Level and active
                                            status.
                                        </p>
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
                                                    <TextField name="content" label="Content" require={false} />
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
                                                        {Boolean(questions) &&
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
                                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">
                                                                                Edit
                                                                            </p>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={routes.adminSliderListUrl} passHref>
                            <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </p>
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </FormWrapper>
    );
};
