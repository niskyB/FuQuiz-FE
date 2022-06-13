import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { statusFieldData } from '../../../../core/common/dataField';
import { FormWrapper, QuillInput, RadioField, SelectField, TextField } from '../../../../core/components/form';
import { Answer } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { RedStar } from '../../../store';

interface AddQuestionProps {}

const AddQuestion: React.FunctionComponent<AddQuestionProps> = () => {
    const router = useRouter();
    const [questionType, setQuestionType] = React.useState<string>('radio');
    const [explanation, setExplanation] = React.useState<string>('');
    explanation;

    const subjectId = React.useMemo(() => {
        return router.asPath.replace(`${routes.adminAddQuestionUrl}`, '');
    }, [router.asPath]);

    const [answers, setAnswers] = React.useState<Answer[]>([
        { id: '1', answerContent: '' },
        { id: '2', answerContent: '' },
    ]);

    const _onChangeQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.target.value && setQuestionType(e.target.value);
    };

    const _handleOnSubmit = async () => {};

    const methods = useForm();
    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Question</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new question for current quiz</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Subject <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField
                                            label=""
                                            name="dimension"
                                            values={[
                                                { label: 'Subject 1', value: '1' },
                                                { label: 'Domain 2', value: '2' },
                                                { label: 'Domain 3', value: '3' },
                                                { label: 'Domain 4', value: '4' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Dimension <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField
                                            label=""
                                            name="dimension"
                                            values={[
                                                { label: 'Domain 1', value: '1' },
                                                { label: 'Domain 2', value: '2' },
                                                { label: 'Domain 3', value: '3' },
                                                { label: 'Domain 4', value: '4' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Lesson <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField
                                            label=""
                                            name="dimension"
                                            values={[
                                                { label: 'Lesson 1', value: '1' },
                                                { label: 'Domain 2', value: '2' },
                                                { label: 'Domain 3', value: '3' },
                                                { label: 'Domain 4', value: '4' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Level <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField
                                            label=""
                                            name="level"
                                            values={[
                                                { label: 'Easy', value: '1' },
                                                { label: 'Domain 2', value: '2' },
                                                { label: 'Domain 3', value: '3' },
                                                { label: 'Domain 4', value: '4' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Status <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField label="" name="level" values={[...statusFieldData]} />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Image Url
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="title" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Video Url
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="title" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Audio Url
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="title" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Content <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <textarea
                                            {...methods.register('content')}
                                            rows={7}
                                            name="content"
                                            id="content"
                                            autoComplete="given-name"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Question Type <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField
                                            label=""
                                            name="dimension"
                                            values={[
                                                { label: 'Multiple choice ', value: 'checkbox' },
                                                { label: 'One choice', value: 'radio' },
                                            ]}
                                            onChange={(e) => _onChangeQuestionType(e)}
                                        />
                                    </div>
                                </div>
                                {answers.map((answer, index) => (
                                    <div
                                        key={answer.id}
                                        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                                    >
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Answer {index + 1} <RedStar />
                                        </label>
                                        <div className="flex items-center flex-1 mt-1 space-x-2 sm:mt-0 sm:col-span-2">
                                            <TextField label="" name="title" />
                                        </div>
                                        <div
                                            className={`flex ${
                                                answers.length - 1 === index ? 'justify-between' : 'justify-end'
                                            } col-span-2 col-end-4 space-x-4`}
                                        >
                                            {answers.length - 1 === index && (
                                                <div className="flex space-x-2">
                                                    <button className="w-8 h-8 text-indigo-500">
                                                        <PlusCircleIcon />
                                                    </button>

                                                    {index !== 0 && (
                                                        <button className="w-8 h-8 text-red-500">
                                                            <XCircleIcon />
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                            <div className="flex items-center space-x-2 text-sm font-medium text-gray-900 w-fit">
                                                <input type={questionType} name="rightAnswer" />
                                                <label>Right Answer</label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <div className="flex justify-start space-x-2">
                                        <label htmlFor="explanation" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Explanation
                                        </label>

                                        <RedStar />
                                    </div>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <QuillInput description={explanation} setDescription={setExplanation} require={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link href={router.asPath.replace('/add', '')} passHref>
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

export default AddQuestion;
