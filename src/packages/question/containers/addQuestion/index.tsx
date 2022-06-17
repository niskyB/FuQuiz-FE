import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { statusFieldData } from '../../../../core/common/dataField';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { FormWrapper, QuillInput, SelectField, TextField } from '../../../../core/components/form';
import { Lesson } from '../../../../core/models/lesson';
import { dataParser } from '../../../../core/util/data';
import { useGetLessonList } from '../../../lesson/common/hooks/useGetLessonList';
import { RedStar } from '../../../store';
import { useGetSubjectListByRole } from '../../../subject/common/hooks/useGetSubjectListByRole';
import { AddQuestionDTO } from './interface';

interface AddQuestionProps {}

const defaultValues: AddQuestionDTO = {
    subject: '',
    lesson: '',
    dimension: '',
    level: '',
    imageUrl: '',
    videoUrl: '',
    audioUrl: '',
    content: '',
    isActive: true,
    isMultipleChoice: false,
    answers: [{ answerContent: '', isCorrect: false }],
    explanation: '',
};

export const AddQuestion: React.FunctionComponent<AddQuestionProps> = () => {
    const router = useRouter();
    const [isMultipleChoice, setIsMultipleChoice] = React.useState<boolean>(false);
    const [explanation, setExplanation] = React.useState<string>('');
    const [subjectId, setSubjectId] = React.useState<string>('');

    const methods = useForm<AddQuestionDTO>({
        defaultValues,
    });
    const answers = useFieldArray({ control: methods.control, name: 'answers' });
    const { subjects } = useGetSubjectListByRole();
    // const subjectId = methods.watch('subject', '');

    const { lessonList: lessons } = useGetLessonList(subjectId);
    // const lessons: Lesson[] = [];

    React.useEffect(() => {
        console.log(subjectId);
    }, [subjectId]);

    const _onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubjectId(e.target.value);
    };

    const _onChangeQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const isMultipleChoice = e.target && e.target.value === 'true' ? true : false;
        setIsMultipleChoice(isMultipleChoice);
    };

    const _onChangeRightAnswerBox = (e: React.ChangeEvent<HTMLInputElement>, refIndex: number) => {
        !isMultipleChoice && answers.fields.map((_, index) => methods.setValue(`answers.${index}.isCorrect`, false));
        methods.setValue(`answers.${refIndex}.isCorrect`, e.target.checked);
    };

    const _handleOnSubmit = async (data: AddQuestionDTO) => {
        data.explanation = explanation;
        data.isMultipleChoice = isMultipleChoice;
        console.log(data);
    };

    return (
        <FormWrapper methods={methods}>
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Question</h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500">This page will be add new question</p>
                        </div>

                        <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                            <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Subject <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField
                                            label=""
                                            name="subject"
                                            id="subject"
                                            onChange={(e) => _onChangeSubject(e)}
                                            values={[unsetFieldData, ...dataParser(subjects, 'name', 'id')]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Lesson <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField label="" name="lesson" values={[unsetFieldData, ...dataParser(lessons, 'name', 'id')]} />
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
                                                { label: 'Group', value: 'group-1' },
                                                { label: 'Domain', value: 'domain-2' },
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
                                                { label: 'Easy', value: 'easy-1' },
                                                { label: 'Medium', value: 'medium-2' },
                                                { label: 'Hard', value: 'hard-3' },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Status <RedStar />
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <SelectField label="" name="isActive" values={statusFieldData} />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Image Url
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="imageUrl" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Video Url
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="videoUrl" />
                                    </div>
                                </div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Audio Url
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <TextField label="" name="audioUrl" />
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
                                            name="isMultipleChoice"
                                            defaultValue={false}
                                            values={[
                                                { label: 'Multiple choice', value: true },
                                                { label: 'One choice', value: false },
                                            ]}
                                            onChange={(e) => _onChangeQuestionType({ ...e })}
                                        />
                                    </div>
                                </div>
                                {answers.fields.map((_, index) => (
                                    <div
                                        key={'answer' + index}
                                        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                                    >
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Answer {index + 1} <RedStar />
                                        </label>
                                        <div className="flex items-center flex-1 mt-1 space-x-2 sm:mt-0 sm:col-span-2">
                                            <TextField label="" {...methods.register(`answers.${index}.answerContent` as const)} />
                                        </div>
                                        <div
                                            className={`flex ${
                                                answers.fields.length - 1 === index ? 'justify-between' : 'justify-end'
                                            } col-span-2 col-end-4 space-x-4`}
                                        >
                                            {answers.fields.length - 1 === index && (
                                                <div className="flex space-x-2">
                                                    <button
                                                        className="w-8 h-8 text-indigo-500 hover:text-indigo-600"
                                                        onClick={() => answers.append({ answerContent: '', isCorrect: false })}
                                                    >
                                                        <PlusCircleIcon />
                                                    </button>

                                                    {index !== 0 && (
                                                        <button
                                                            className="w-8 h-8 text-red-500 hover:text-red-600"
                                                            onClick={() => answers.remove(answers.fields.length - 1)}
                                                        >
                                                            <XCircleIcon />
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                            <div className="flex items-center space-x-2 text-sm font-medium text-gray-900 w-fit">
                                                <input
                                                    type={isMultipleChoice ? 'checkbox' : 'radio'}
                                                    name="isCorrect"
                                                    onChange={(e) => _onChangeRightAnswerBox({ ...e }, index)}
                                                />
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
