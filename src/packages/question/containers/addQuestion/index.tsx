import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Answer } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { RedStar } from '../../../store';

interface AddQuestionProps {}

const AddQuestion: React.FunctionComponent<AddQuestionProps> = () => {
    const [details, setDetails] = React.useState('');
    const router = useRouter();

    const subjectId = React.useMemo(() => {
        return router.asPath.replace(`${routes.adminSubjectListUrl}/`, '').replace(routes.addQuestionUrl, '');
    }, [router.asPath]);

    console.log(subjectId);

    const [answers, setAnswers] = React.useState<Answer[]>([
        { id: '1', answerContent: 'Answer 1' },
        { id: '2', answerContent: 'Answer 2' },
        { id: '3', answerContent: 'Answer 3' },
        { id: '4', answerContent: 'Answer 4' },
    ]);
    console.log(router.asPath.replace(`${routes.adminSubjectListUrl}/`, '').replace(routes.addQuestionUrl, ''));

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
                                                { label: 'Domain 1', value: '1' },
                                                { label: 'Domain 2', value: '2' },
                                                { label: 'Domain 3', value: '3' },
                                                { label: 'Domain 4', value: '4' },
                                            ]}
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
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <TextField label="" name="title" />
                                        </div>
                                    </div>
                                ))}
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Right Answer <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField
                                            label=""
                                            name="rightAnswer"
                                            values={answers.map((answer) => ({ label: `Answer ${answer.id}`, value: answer.id }))}
                                        />
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
