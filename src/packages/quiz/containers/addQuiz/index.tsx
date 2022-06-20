import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { routes } from '../../../../core/routes';
import { RedStar } from '../../../store';
import { AddQuestionQuizDTO } from './interface';

interface AddQuizProps {}

const mapFields = [{ label: 'Name', name: 'name' }];

export const AddQuiz: React.FunctionComponent<AddQuizProps> = () => {
    const [questions, setQuestions] = React.useState<AddQuestionQuizDTO[]>([]);

    const router = useRouter();
    const filterMethods = useForm();
    const methods = useForm();

    const _handleOnFilter = async (data: any) => {
        data.subject = methods.getValues('subject');
    };

    const _handleOnSubmit = async (data: any) => {};

    return (
        <div className="space-y-8 divide-y divide-gray-200">
            <FormWrapper methods={methods}>
                <form onSubmit={methods.handleSubmit(_handleOnSubmit)} id="quizForm">
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
                                            name="subject"
                                            values={[
                                                { label: 'Subject 1', value: 's1' },
                                                { label: 'Subject 2', value: 's2' },
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
                                            name="level"
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
                                        <TextField label="" name={'duration'} type="number" min={0} />
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
                                            name="quizType"
                                            values={[
                                                { label: 'Simulation', value: '1Simulation' },
                                                { label: 'Practice', value: '2Practice' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <div className="flex justify-start space-x-2">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Number of questions
                                        </label>
                                        <RedStar />
                                    </div>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name={'numberOfQuestion'} type="number" min={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </FormWrapper>

            <div className="w-full mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                <div className="space-y-4 ">
                    <div>
                        <h2 className="text-lg font-medium leading-6 text-gray-900">Setting</h2>
                        <div className="flex max-w-2xl mt-1 text-sm text-gray-500">
                            Choose question for quiz <p className="ml-1 font-semibold text-red-600">(will reset if change subject)</p>
                        </div>
                    </div>

                    <div>
                        <FormWrapper methods={filterMethods}>
                            <form className="space-y-4" onSubmit={filterMethods.handleSubmit(_handleOnFilter)} id="filterForm">
                                <div className="flex flex-col space-y-2">
                                    <div className="flex space-x-4">
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
                                        <TextField name="content" label="Content" isRequire={false} />
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        form="filterForm"
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
                                        <TableHead fields={['Lesson', 'Dimension', 'Content', 'Level', 'Choose question']} />

                                        <TableBody>
                                            {Boolean(questions) &&
                                                questions.map((question, index) => (
                                                    <TableRow key={question.id}>
                                                        <TableDescription>
                                                            <div className="text-gray-900">{question.lesson.name}</div>
                                                        </TableDescription>
                                                        <TableDescription>
                                                            <div className="text-gray-900">{question.dimension.name}</div>
                                                        </TableDescription>
                                                        <TableDescription>
                                                            <p className="w-full text-gray-900 break-normal line-clamp-4">{question.content}</p>
                                                        </TableDescription>
                                                        <TableDescription>{question.lesson.name}</TableDescription>

                                                        <TableDescription>
                                                            <input {...methods.register('questions')} value={question.id} type={`checkbox`} />
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

            <div className="flex justify-between pt-5">
                <p className="mt-2 font-semibold text-red-500 text">Choose Questions: 2/60</p>
                <div className="flex">
                    <Link href={router.asPath.replace(routes.adminAddQuizUrl, '')} passHref>
                        <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                        </p>
                    </Link>
                    <button
                        form="quizForm"
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};
