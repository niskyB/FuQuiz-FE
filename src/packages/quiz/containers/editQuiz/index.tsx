import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { allFieldData, statusFieldData } from '../../../../core/common/dataField';
import { unsetFieldData } from '../../../../core/common/dataField/unset';
import { FormErrorMessage, FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { routes } from '../../../../core/routes';
import { clearQuery } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { useGetDimensionListById } from '../../../dimension';
import { useGetExamLevel } from '../../../examLevel/common/useGetExamLevel';
import { useGetLessonList } from '../../../lesson/common/hooks/useGetLessonList';
import { useGetAllQuestionList, useGetQuestionLevelList } from '../../../question';
import { FilterQuestionFormDTO, FilterQuestionsDTO } from '../../../question/containers/questionList/interface';
import { useGetSubjectList } from '../../../subject';
import { SubjectFilterDTO } from '../../../subject/container/subjectList/interface';
import { useGetQuizById } from '../../common/hooks/useGetQuizById';
import { useGetQuizType } from '../../common/hooks/useGetQuizType';
import { updateQuiz } from './action';
import { EditQuizFromDTO } from './interface';
interface EditQuizProps {
    quizId: string;
}

const mapFields = [{ label: 'Name', name: 'name' }];

export const EditQuiz: React.FunctionComponent<EditQuizProps> = ({ quizId }) => {
    const router = useRouter();
    const filterMethods = useForm<FilterQuestionFormDTO>();
    const methods = useForm<EditQuizFromDTO>();

    const [selectedSubjectId, setSelectedSubjectId] = React.useState<string>('');
    const [numberOfQuestion, setNumberOfQuestion] = React.useState<number>(0);
    const [questionOption, setQuestionOption] = React.useState<Partial<FilterQuestionsDTO>>({});
    const [selectedQuestions, setSelectedQuestions] = React.useState<string[]>([]);

    const subjectOption = React.useMemo<Partial<SubjectFilterDTO>>(() => ({}), []);

    const { lessonList } = useGetLessonList({ id: selectedSubjectId });
    const { dimensionList } = useGetDimensionListById(selectedSubjectId);
    const { subjects } = useGetSubjectList(subjectOption);
    const { ExamLevelList } = useGetExamLevel();
    const { quizTypeList: QuizTypeList } = useGetQuizType();
    const { levels } = useGetQuestionLevelList();
    const { questions: questionList } = useGetAllQuestionList({ subject: selectedSubjectId, currentPage: 1, pageSize: 999, ...questionOption });
    const { quiz } = useGetQuizById(quizId);

    React.useEffect(() => {
        if (quiz) {
            setSelectedSubjectId(quiz.subject.id);
            setNumberOfQuestion(quiz.numberOfQuestion);
            methods.setValue('subject', quiz.subject.id);
            methods.setValue('name', quiz.name);
            methods.setValue('duration', quiz.duration);
            methods.setValue('passRate', quiz.passRate);
            methods.setValue('numberOfQuestion', quiz.numberOfQuestion);
            methods.setValue('isPublic', quiz.isPublic);
            methods.setValue('quizLevel', quiz.level.id);
            methods.setValue('type', quiz.type.id);

            setSelectedQuestions(quiz.questions.map((item) => item.id));
        }
        return () => {};
    }, [quiz]);

    const _onHandleCheckChange = (e: React.ChangeEvent<HTMLInputElement>, questionId: string) => {
        if (e.target.checked) {
            setSelectedQuestions((prev) => [...prev, questionId]);
        } else {
            setSelectedQuestions((prev) => prev.filter((item) => item !== questionId));
        }
    };

    const _handleOnFilter = async (data: FilterQuestionFormDTO) => {
        setQuestionOption((prev) => ({ ...prev, ...data }));
    };

    const _handleOnSubmit = async (data: EditQuizFromDTO) => {
        if (selectedQuestions.length === numberOfQuestion) {
            const res = await updateQuiz(quizId, { ...data, questions: selectedQuestions });
            if (res) {
                router.push(clearQuery(router.asPath).replace(`${routes.adminEditQuizUrl}/${quizId}`, ''));
                toast.success('Update success!');
            }
        } else {
            toast.warn('Number of question and number of question you have selected should be equal!');
        }
    };
    return (
        <div className="space-y-8 divide-y divide-gray-200">
            <FormWrapper methods={methods}>
                <form onSubmit={methods.handleSubmit(_handleOnSubmit)} id="quizForm">
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-2xl font-medium leading-6 text-gray-900">Edit Quiz</h1>
                                <p className="max-w-2xl mt-1 text-xl text-gray-500">This page for update quiz</p>
                            </div>
                            <div className="w-full mt-6 space-y-6 sm:max-w-3xl sm:mt-5 sm:space-y-5">
                                <div>
                                    <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
                                    <p className="max-w-2xl mt-1 text-sm text-gray-500">General quiz setting</p>
                                </div>
                                {mapFields.map((item) => (
                                    <TextField key={item.name} label={item.label} name={item.name} type="text" direction="row" />
                                ))}

                                <SelectField
                                    label="Subject"
                                    name="subject"
                                    disabled
                                    onChange={(e) => {
                                        setSelectedSubjectId(e.target.value);
                                    }}
                                    values={[unsetFieldData, ...dataParser(subjects, 'name', 'id')]}
                                    direction="row"
                                />

                                <SelectField
                                    label="Exam level"
                                    name="quizLevel"
                                    values={[unsetFieldData, ...dataParser(ExamLevelList, 'name', 'id')]}
                                    direction="row"
                                />

                                <TextField label="Duration (minutes)" name={'duration'} type="number" min={0} direction="row" />

                                <TextField label="Pass rate" name={'passRate'} type="number" min={0} max={100} direction="row" />

                                <SelectField
                                    label="Quiz Type"
                                    name="type"
                                    values={[unsetFieldData, ...dataParser(QuizTypeList, 'description', 'id')]}
                                    direction="row"
                                />

                                <TextField
                                    label="Number of questions"
                                    name="numberOfQuestion"
                                    type="number"
                                    min={1}
                                    onChange={(e) => {
                                        setNumberOfQuestion(Number(e.target.value));
                                    }}
                                    direction="row"
                                />
                                <SelectField label="Public" name="isPublic" values={[unsetFieldData, ...statusFieldData]} direction="row" />
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
                                            isRequire={false}
                                            label="Lesson"
                                            values={[allFieldData, ...(dataParser(lessonList, 'name', 'id') || [])]}
                                            name="lesson"
                                        />
                                        <SelectField
                                            isRequire={false}
                                            label="Dimension"
                                            values={[allFieldData, ...(dataParser(dimensionList, 'name', 'id') || [])]}
                                            name="dimension"
                                        />
                                        <SelectField
                                            isRequire={false}
                                            label="Level"
                                            values={[allFieldData, ...(dataParser(levels, 'description', 'id') || [])]}
                                            name="level"
                                        />
                                        <SelectField isRequire={false} label="Active" values={[allFieldData, ...statusFieldData]} name="isActive" />
                                        <TextField name="content" label="Content" isRequire={false} />
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        onClick={() => {
                                            filterMethods.reset();
                                            setSelectedQuestions([]);
                                        }}
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
                                            {selectedSubjectId &&
                                                questionList.map((question, index) => (
                                                    <TableRow key={question.id}>
                                                        <TableDescription>
                                                            <div className="text-gray-900">{question.lesson.name}</div>
                                                        </TableDescription>
                                                        <TableDescription>
                                                            <div className="text-gray-900">
                                                                {question.dimensions.map((dimension) => dimension.name).join(', ')}
                                                            </div>
                                                        </TableDescription>
                                                        <TableDescription>
                                                            <p className="w-full text-gray-900 break-normal line-clamp-4">{question.content}</p>
                                                        </TableDescription>
                                                        <TableDescription>{question.questionLevel.description}</TableDescription>

                                                        <TableDescription>
                                                            <input
                                                                value={question.id}
                                                                type={`checkbox`}
                                                                onChange={(e) => _onHandleCheckChange(e, question.id)}
                                                                checked={selectedQuestions.includes(question.id)}
                                                            />
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
            <p>
                <FormErrorMessage />
            </p>

            <div className="flex justify-between pt-5">
                <p className="mt-2 font-semibold text-red-500 text">
                    Choose Questions: {selectedQuestions.length}/{numberOfQuestion}
                </p>
                <div className="flex">
                    <Link href={clearQuery(router.asPath).replace(`${routes.adminEditQuizUrl}/${quizId}`, '')} passHref>
                        <p className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                        </p>
                    </Link>
                    <button
                        form="quizForm"
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};
