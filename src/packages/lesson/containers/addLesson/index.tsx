import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, QuillInput, SelectField, TextField } from '../../../../core/components/form';
import { Lesson, LessonAttribute, LessonDetail, LessonType, QuizLesson, SubjectTopic } from '../../../../core/models/lesson';
import { routes } from '../../../../core/routes';

interface AddLessonProps {}

const AddLesson: React.FunctionComponent<AddLessonProps> = () => {
    const router = useRouter();
    const [description, setDescription] = React.useState<string>('');
    const [formType, setFormType] = React.useState<LessonType>(LessonType.LESSON_DETAIL);
    // const quizAttribute: QuizLesson = {
    //     id: '',
    //     description: '',
    //     questions: [],
    // };

    const subjectTopic: SubjectTopic = {
        id: '',
        name: '',
    };

    const lessonsAttribute: LessonAttribute[] = [
        { type: { id: '1', name: LessonType.LESSON_DETAIL }, attribute: null },
        { type: { id: '2', name: LessonType.QUIZ_LESSON }, attribute: null },
        { type: { id: '3', name: LessonType.TOPIC_LESSON }, attribute: null },
    ];

    const _handleOnSubmit = async (data: Lesson<SubjectTopic>) => {};

    const methods = useForm<Lesson<SubjectTopic>>({ defaultValues: { order: 0, name: '', lessonAttribute: { name: '' } } });

    const _onChangeSubjectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        for (let i = 0; i < lessonsAttribute.length; i++) {
            const item = lessonsAttribute[i];
            if (item.type.id === e.target.value) {
                setFormType(item.type.name);
            }
        }
    };
    const _onRenderForm = () => {
        switch (formType) {
            case LessonType.LESSON_DETAIL:
                return;

            case LessonType.QUIZ_LESSON:
                return (
                    <>
                        <TextField label="Video link" name="videoLink" />
                        <QuillInput label="Description" description={description} setDescription={setDescription} />
                    </>
                );
            case LessonType.TOPIC_LESSON:
                return (
                    <>
                        <SelectField label="Quiz" name="quiz" values={[]} />
                        <QuillInput label="Description" description={description} setDescription={setDescription} />
                    </>
                );
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
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">Add new lesson subject</h3>
                                        <p className="max-w-2xl mt-1 text-sm text-gray-500">
                                            This information will be displayed publicly so be careful what you share.
                                        </p>
                                    </div>
                                    <div>
                                        <SelectField
                                            label="Subject Type"
                                            name="type"
                                            values={lessonsAttribute.map((lesson) => ({ label: lesson.type.name, value: lesson.type.id }))}
                                            onChange={(e) => _onChangeSubjectType(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-5 ">
                            <TextField label="name" name="name" />
                            <div className="flex space-x-5">
                                {/* <SelectField
                                    label="Topic"
                                    name="topic"
                                    values={[
                                        { label: 'Topic 1', value: 'topic 1' },
                                        { label: 'Topic 2', value: 'topic 2' },
                                        { label: 'Topic 3', value: 'topic 3' },
                                    ]}
                                /> */}
                                <TextField label="order" name="order" type={'number'} min={1} />
                            </div>

                            {_onRenderForm()}
                        </div>
                        <div className="pt-5">
                            <div className="flex justify-end">
                                <Link href={router.asPath.replace('/lesson/add', '')} passHref>
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </button>
                                </Link>
                                <Link href={routes.adminBlogListUrl} passHref>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </FormWrapper>
            </div>
        </div>
    );
};

export default AddLesson;
