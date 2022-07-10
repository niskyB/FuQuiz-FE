import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { statusFieldData } from '../../../../core/common/dataField';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { SelectionFieldValues } from '../../../../core/common/interface';
import { FileField, FormWrapper, QuillInput, SelectField, TextField } from '../../../../core/components/form';
import { MultiSelectBox } from '../../../../core/components/form/multiSelectBox';
import { TextareaField } from '../../../../core/components/form/textareaField';
import { LessonTypeEnum } from '../../../../core/models/lesson';
import { dataParser } from '../../../../core/util/data';
import { useGetDimensionListById } from '../../../dimension/common/hooks/useGetDimensionListBySubjectId';
import { useGetLessonList } from '../../../lesson/common/hooks/useGetLessonList';
import { useGetSubjectListByRole } from '../../../subject';
import { useGetQuestionLevelList } from '../../common/hooks/getQuestionLevel';
import { AnswerListForm } from '../../components/answerListForm';
import { addQuestion } from './action';
import { AddQuestionDTO } from './interface';

interface AddQuestionProps {}

const defaultValues: Omit<AddQuestionDTO, 'image'> = {
    subject: '',
    lesson: '',
    dimensions: '',
    questionLevel: '',
    videoLink: '',
    audioLink: '',
    content: '',
    isActive: true,
    isMultipleChoice: false,
    answers: [{ detail: '', isCorrect: false }],
    explanation: '',
};

export const AddQuestion: React.FunctionComponent<AddQuestionProps> = () => {
    const router = useRouter();

    const methods = useForm<AddQuestionDTO>({
        defaultValues,
    });
    const answers = useFieldArray({ control: methods.control, name: 'answers' });

    const [isMultipleChoice, setIsMultipleChoice] = React.useState<boolean>(false);
    const [explanation, setExplanation] = React.useState<string>('');
    const [subjectId, setSubjectId] = React.useState<string>('');
    const [selectedDimension, setSelectedDimension] = React.useState<SelectionFieldValues<any>>(unsetFieldData);
    const [selectedDimensionList, setSelectedDimensionList] = React.useState<SelectionFieldValues<any>[]>([]);
    const [previewThumbnailUrl, setPreviewThumbnailUrl] = React.useState<string>('');
    const [thumbnailFile, setThumbnailFile] = React.useState<File | null>(null);

    const { subjects } = useGetSubjectListByRole();
    const { lessonList: lessons } = useGetLessonList({ id: subjectId });
    const { dimensionList: dimensions } = useGetDimensionListById(subjectId);
    const { levels } = useGetQuestionLevelList();

    React.useEffect(() => {
        methods.reset();
        methods.setValue('subject', subjectId);
        setSelectedDimension(unsetFieldData);
        setSelectedDimensionList([]);
        setIsMultipleChoice(false);
        setExplanation('');
    }, [subjectId]);

    const _onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubjectId(e.target.value);
    };

    const _onChangeQuestionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const isMultipleChoice = e.target && e.target.value === 'true' ? true : false;
        setIsMultipleChoice(isMultipleChoice);
    };

    const _onChangeRightAnswerBox = (e: React.ChangeEvent<HTMLInputElement>, refIndex: number) => {
        if (!isMultipleChoice) answers.fields.map((_, index) => methods.setValue(`answers.${index}.isCorrect`, false));
        methods.setValue(`answers.${refIndex}.isCorrect`, e.target.checked);
    };

    const _handleOnSubmit = async (data: AddQuestionDTO) => {
        const { subject, ...others } = data;
        if (thumbnailFile) others.image = thumbnailFile;

        others.explanation = explanation;
        others.isMultipleChoice = isMultipleChoice;
        let dimensionString = '';
        selectedDimensionList.map((item) => (dimensionString = dimensionString + item.value + ','));
        others.dimensions = dimensionString;
        await addQuestion(others).then(() => {
            methods.reset();
            setPreviewThumbnailUrl('');
            setThumbnailFile(null);
            setExplanation('');
            setSelectedDimension(unsetFieldData);
            setSelectedDimensionList([]);
            setIsMultipleChoice(false);
            toast.success('Add new question success!');
        });
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
                                <SelectField
                                    label="Subject"
                                    name="subject"
                                    direction="row"
                                    onChange={(e) => _onChangeSubject(e)}
                                    values={[unsetFieldData, ...dataParser(subjects, 'name', 'id')]}
                                />

                                <SelectField
                                    label="Lesson"
                                    name="lesson"
                                    direction="row"
                                    values={[
                                        unsetFieldData,
                                        ...dataParser(
                                            lessons.filter((lesson) => lesson.type.description !== LessonTypeEnum.LESSON_QUIZ),
                                            'name',
                                            'id'
                                        ),
                                    ]}
                                />

                                <MultiSelectBox
                                    selected={selectedDimension}
                                    setSelected={setSelectedDimension}
                                    selectedList={selectedDimensionList}
                                    setSelectedList={setSelectedDimensionList}
                                    values={dataParser(dimensions, 'name', 'id')}
                                    name="dimensions"
                                    label="Dimensions"
                                    direction="row"
                                />

                                <SelectField
                                    label="Level"
                                    direction="row"
                                    name="questionLevel"
                                    values={[unsetFieldData, ...dataParser(levels, 'description', 'id')]}
                                />

                                <SelectField label="Status" direction="row" name="isActive" values={statusFieldData} />

                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Image
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <FileField
                                            label=""
                                            name="image"
                                            setFile={setThumbnailFile}
                                            file={thumbnailFile}
                                            previewUrl={previewThumbnailUrl}
                                            setPreviewUrl={setPreviewThumbnailUrl}
                                        />
                                    </div>
                                </div>

                                <TextField isRequire={false} label="Video Url" name="videoLink" direction="row" />

                                <TextField isRequire={false} label="Audio Url" name="audioLink" direction="row" />

                                <TextareaField label="Content" name="content" direction="row" />

                                <SelectField
                                    label="Question Type"
                                    direction="row"
                                    name="isMultipleChoice"
                                    values={[
                                        { label: 'One choice', value: false },
                                        { label: 'Multiple choice', value: true },
                                    ]}
                                    onChange={(e) => _onChangeQuestionType({ ...e })}
                                />

                                <AnswerListForm
                                    _onChangeRightAnswerBox={_onChangeRightAnswerBox}
                                    answers={answers.fields}
                                    isMultipleChoice={isMultipleChoice}
                                    direction={'row'}
                                    label="Answers"
                                />

                                <div className="flex justify-end space-x-2">
                                    <button
                                        className="w-8 h-8 text-indigo-500 hover:text-indigo-600"
                                        onClick={() => answers.append({ detail: '', isCorrect: false })}
                                        type="button"
                                    >
                                        <PlusCircleIcon />
                                    </button>

                                    {answers.fields.length !== 1 && (
                                        <button
                                            className="w-8 h-8 text-red-500 hover:text-red-600"
                                            onClick={() => answers.remove(answers.fields.length - 1)}
                                            type="button"
                                        >
                                            <XCircleIcon />
                                        </button>
                                    )}
                                </div>

                                <QuillInput
                                    label="Explanation"
                                    direction="row"
                                    name="explanation"
                                    description={explanation}
                                    setDescription={setExplanation}
                                    isRequire={true}
                                />
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
