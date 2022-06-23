import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { SelectionFieldValues } from '../../../../core/common/interface';
import { FormWrapper, QuillInput, SelectField, TextField } from '../../../../core/components/form';
import { MultiSelectBox } from '../../../../core/components/form/multiSelectBox';
import { LessonType, LessonTypeEnum } from '../../../../core/models/lesson';
import { QuizType, QuizTypeEnum } from '../../../../core/models/quiz';
import { store } from '../../../../core/store';
import { apiActions } from '../../../../core/store/api';
import { dataParser } from '../../../../core/util/data';
import { useGetQuizList } from '../../../quiz/common/hooks/useGetQuizList';
import { useGetQuizType } from '../../../quiz/common/hooks/useGetQuizType';
import { useGetLessonType } from '../../common/hooks/useGetLessonType';
import { addLesson } from './action';
import { AddLessonFormDTO } from './interface';

interface AddLessonProps {
    subjectId: string;
}

export const AddLesson: React.FunctionComponent<AddLessonProps> = ({ subjectId }) => {
    const methods = useForm<AddLessonFormDTO>();

    const router = useRouter();
    const [description, setDescription] = React.useState<string>('');
    const [formType, setFormType] = React.useState<LessonTypeEnum>(LessonTypeEnum.LESSON_DETAIL);

    const [selectedQuiz, setSelectedQuiz] = React.useState<SelectionFieldValues<any>>(unsetFieldData);
    const [selectedQuizList, setSelectedQuizList] = React.useState<SelectionFieldValues<any>[]>([]);
    const { lessonType } = useGetLessonType();
    const [quizType, setQuizType] = React.useState<string>('');

    const { quizTypeList: quizTypeList } = useGetQuizType();
    const { quizList } = useGetQuizList({ currentPage: 0, pageSize: 999, name: '', subject: subjectId, type: quizType });
    React.useEffect(() => {}, [quizList]);

    const _handleOnSubmit = async (data: AddLessonFormDTO) => {
        const { quizType, ...others } = data;
        console.log(quizList.map((item) => item.id).toString());
        const res = await addLesson({ ...others, isActive: true, subject: subjectId, htmlContent: description });
        if (res) {
            methods.reset();
            store.dispatch(apiActions.resetState());
            setDescription('');
            toast.success('Add lesson success!');
            methods.setValue('type', others.type);
        }
    };
    React.useEffect(() => {
        if (lessonType.length > 0) methods.setValue('type', lessonType[0].id);
        return () => {};
    }, [lessonType]);

    const _onChangeSubjectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        for (let i = 0; i < lessonType.length; i++) {
            const item = lessonType[i];
            if (item.id === e.target.value) {
                setFormType(item.description);
            }
        }
    };

    const _onChangeQuizType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.target && setQuizType(e.target.value);
    };

    const _onRenderForm = () => {
        switch (formType) {
            case LessonTypeEnum.LESSON_DETAIL:
                return (
                    <>
                        <TextField label="Video link" name="videoLink" />
                        <QuillInput label="HTML Content" description={description} setDescription={setDescription} />
                    </>
                );

            case LessonTypeEnum.LESSON_QUIZ:
                return (
                    <>
                        <SelectField
                            label="Quiz Type"
                            name="quizType"
                            values={dataParser<QuizType>(quizTypeList, 'description', 'id')}
                            onChange={(e) => _onChangeQuizType(e)}
                        />
                        <MultiSelectBox
                            name="quiz"
                            label="Quiz"
                            selected={selectedQuiz}
                            setSelected={setSelectedQuiz}
                            selectedList={selectedQuizList}
                            setSelectedList={setSelectedQuizList}
                            values={dataParser(quizList, 'name', 'id')}
                        />
                        <QuillInput label="HTML Content" description={description} setDescription={setDescription} />
                    </>
                );
            case LessonTypeEnum.SUBJECT_TOPIC:
                return <></>;
        }
    };
    return (
        <div className="max-w-4xl px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="flex flex-col mt-8">
                <FormWrapper methods={methods}>
                    <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-8 divide-y divide-gray-200">
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="text-lg font-medium leading-6 text-gray-900 capitalize">Add new lesson</h3>
                                        <p className="max-w-2xl mt-1 text-sm text-gray-500">
                                            This information will be displayed publicly so be careful what you share.
                                        </p>
                                    </div>
                                    <div>
                                        <SelectField
                                            label="Lessons Type"
                                            name="type"
                                            values={dataParser<LessonType>(lessonType, 'description', 'id')}
                                            onChange={(e) => _onChangeSubjectType(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-5 ">
                            <TextField label="name" name="name" />
                            <div className="flex space-x-5">
                                <TextField name="topic" label="Topic" />
                                <TextField label="order" name="order" type={'number'} min={1} />
                            </div>
                            {_onRenderForm()}
                        </div>
                        <div className="pt-5">
                            <div className="flex justify-end">
                                <Link href={router.asPath.replace('/add', '')} passHref>
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </button>
                                </Link>

                                <button
                                    type="submit"
                                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
};
