import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SelectionFieldValues } from '../../../../core/common/interface';
import { FormWrapper, QuillInput, SelectField, TextField } from '../../../../core/components/form';
import { MultiSelectBox } from '../../../../core/components/form/multiSelectBox';
import { LessonType, LessonTypeEnum } from '../../../../core/models/lesson';
import { dataParser } from '../../../../core/util/data';
import { useGetLessonById } from '../../common/hooks/useGetLessonById';
import { useGetLessonType } from '../../common/hooks/useGetLessonType';
import { editLesson } from './action';
import { EditLessonFormDTO } from './interface';

interface EditLessonProps {
    subjectId: string;
    lessonId: string;
}

const EditLesson: React.FunctionComponent<EditLessonProps> = ({ subjectId, lessonId }) => {
    const methods = useForm<EditLessonFormDTO>();
    const { lesson } = useGetLessonById(lessonId);

    const router = useRouter();
    const [description, setDescription] = React.useState<string>('');
    const [formType, setFormType] = React.useState<LessonTypeEnum>(LessonTypeEnum.LESSON_DETAIL);

    const [selectedQuiz, setSelectedQuiz] = React.useState<SelectionFieldValues<any>>({ label: 'Quiz 1', value: '1' });
    const [selectedQuizList, setSelectedQuizList] = React.useState<SelectionFieldValues<any>[]>([]);
    const { lessonType } = useGetLessonType();
    React.useEffect(() => {
        if (lesson) {
            methods.setValue('name', lesson.name);
            methods.setValue('order', lesson.order);
            methods.setValue('topic', lesson.topic);
            methods.setValue('type', lesson.type.id);
            methods.setValue('videoLink', lesson.lessonDetail && lesson.lessonDetail.videoLink);

            setDescription(lesson.lessonDetail && lesson.lessonDetail.htmlContent);
            setFormType(lesson.type.name);
        }

        return () => {};
    }, [lesson]);

    const _handleOnSubmit = async (data: EditLessonFormDTO) => {
        const res = await editLesson(lessonId, data);
        if (res) {
            router.push(router.asPath.replace(`/edit/${lesson?.id}`, ''));
            toast.success('Update success!');
        }
    };

    const _onChangeSubjectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        for (let i = 0; i < lessonType.length; i++) {
            const item = lessonType[i];
            if (item.id === e.target.value) {
                setFormType(item.name);
            }
        }
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
                            label="Quiz"
                            name="quiz"
                            values={dataParser<LessonType>(lessonType, 'name', 'id')}
                            onChange={(e) => _onChangeSubjectType(e)}
                        />
                        <MultiSelectBox
                            label="Quiz"
                            selected={selectedQuiz}
                            setSelected={setSelectedQuiz}
                            selectedList={selectedQuizList}
                            setSelectedList={setSelectedQuizList}
                            values={[
                                { label: 'Quiz 1', value: '1' },
                                { label: 'Quiz 2', value: '2' },
                                { label: 'Quiz 3', value: '3' },
                                { label: 'Quiz 4', value: '4' },
                            ]}
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
                                        <h3 className="text-lg font-medium leading-6 text-gray-900 capitalize">Edit lesson</h3>
                                        <p className="max-w-2xl mt-1 text-sm text-gray-500">
                                            This information will be displayed publicly so be careful what you share.
                                        </p>
                                    </div>
                                    <div>
                                        <SelectField
                                            label="Lessons Type"
                                            disabled
                                            require={false}
                                            name="type"
                                            values={dataParser<LessonType>(lessonType, 'name', 'id')}
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
                                <Link href={router.asPath.replace(`/edit/${lesson?.id}`, '')} passHref>
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

export default EditLesson;
