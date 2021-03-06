import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { QuestionListPageProps } from '../../../../../pages/dashboard/question-bank/question';
import { allFieldData, statusFieldData } from '../../../../core/common/dataField';
import { useUrlParams } from '../../../../core/common/hooks/useUrlParams';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { Table, TableDescription, TableHead, TableRow } from '../../../../core/components/table';
import { TableBody } from '../../../../core/components/table/tableBody';
import { Question } from '../../../../core/models/question';
import { routes } from '../../../../core/routes';
import { clearQuery, pushWithParams } from '../../../../core/util';
import { dataParser } from '../../../../core/util/data';
import { PaginationBar } from '../../../dashboard';
import { useGetDimensionListById } from '../../../dimension/common/hooks/useGetDimensionListBySubjectId';
import { useGetLessonList } from '../../../lesson/common/hooks/useGetLessonList';
import { useGetSubjectListByRole } from '../../../subject/common/hooks/useGetSubjectListByRole';
import { useGetAllQuestionList } from '../../common/hooks/getAllQuestionList';
import { useGetQuestionLevelList } from '../../common/hooks/getQuestionLevel';
import { editQuestion, useGetQuestionById } from '../editQuestion/action';
import { FilterQuestionsDTO, QuestionListDTO } from './interface';

export interface QuestionListProps extends QuestionListPageProps {}

export const QuestionList: React.FunctionComponent<QuestionListProps> = ({
    content,
    currentPage,
    dimension,
    isActive,
    lesson,
    level,
    pageSize,
    subject,
}) => {
    const methods = useForm<FilterQuestionsDTO>();
    const router = useRouter();

    const [questions, setQuestions] = React.useState<QuestionListDTO[]>([]);
    const [subjectId, setSubjectId] = React.useState<string>('');
    const [updateQuestionId, setUpdateQuestionId] = React.useState<string>('');
    const [boolean, setBoolean] = React.useState(true);

    const options = React.useMemo(
        () => ({
            content,
            currentPage,
            dimension,
            isActive,
            lesson,
            level,
            pageSize,
            subject,
            boolean,
        }),
        [content, currentPage, dimension, isActive, lesson, level, pageSize, subject, boolean]
    );

    useUrlParams({
        defaultPath: routes.adminQuestionListUrl,
        query: { ...router.query, content, currentPage, dimension, isActive, lesson, level, pageSize },
    });

    const { subjects } = useGetSubjectListByRole();
    const { lessonList: lessons } = useGetLessonList({ id: subjectId });
    const { dimensionList: dimensions } = useGetDimensionListById(subjectId);
    const { levels } = useGetQuestionLevelList();
    const { question } = useGetQuestionById(updateQuestionId);
    const { questions: allQuestion, count } = useGetAllQuestionList(options);

    React.useEffect(() => {
        setQuestions(allQuestion);
    }, [allQuestion]);

    React.useEffect(() => {
        if (updateQuestionId && question) {
            editQuestion(question.id, {
                answers: question.answers,
                questionLevel: question.questionLevel.id,
                isActive: !question.isActive,
                audioLink: question.audioLink,
                content: question.content,
                explanation: question.explanation,
                isMultipleChoice: question.isMultipleChoice,
                videoLink: question.videoLink,
                image: new File([], ''),
            }).then(() => {
                toast.success('Update success!');
                setBoolean((prev) => !prev);
            });
        }
        return () => {};
    }, [question]);

    const _onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubjectId(e.target.value);
    };

    const _handleOnSubmit = async (data: FilterQuestionsDTO) => {
        pushWithParams(router, routes.adminQuestionListUrl, { ...options, ...data });
    };

    const _onToggleShowing = (question: Question) => {
        setUpdateQuestionId(question.id);
    };

    return (
        <div className="px-4 space-y-4 sm:px-6 lg:px-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Question List</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all question in current quiz including Subject, Lesson, Dimension, Content, Level and active status.
                    </p>
                </div>
                <div className="mt-4 space-x-2 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href={clearQuery(router.asPath) + '/import'} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Import
                        </p>
                    </Link>
                    <Link href={clearQuery(router.asPath).replace(routes.adminQuestionListUrl, routes.adminQuizListUrl)} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Quiz List
                        </p>
                    </Link>
                    <Link href={routes.adminQuestionListUrl + routes.adminAddQuestionUrl} passHref>
                        <p className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add Question
                        </p>
                    </Link>
                </div>
            </div>
            <div>
                <FormWrapper methods={methods}>
                    <form className="space-y-4" onSubmit={methods.handleSubmit(_handleOnSubmit)}>
                        <div className="flex flex-col space-y-2">
                            <div className="flex space-x-4">
                                <SelectField
                                    isRequire={false}
                                    label="Subject (will change lesson and dimension too)"
                                    onChange={(e) => _onChangeSubject(e)}
                                    values={[allFieldData, ...dataParser(subjects, 'name', 'id')]}
                                    name="subject"
                                />
                                <SelectField
                                    isRequire={false}
                                    label="Lesson"
                                    values={[allFieldData, ...dataParser(lessons, 'name', 'id')]}
                                    name="lesson"
                                />
                                <SelectField
                                    isRequire={false}
                                    label="Dimension"
                                    values={[allFieldData, ...dataParser(dimensions, 'name', 'id')]}
                                    name="dimension"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <TextField name="content" label="Content" isRequire={false} />
                                <SelectField
                                    isRequire={false}
                                    label="Level"
                                    values={[allFieldData, ...dataParser(levels, 'description', 'id')]}
                                    name="level"
                                />
                                <SelectField isRequire={false} label="Status" values={[allFieldData, ...statusFieldData]} name="isActive" />
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
                                    {Boolean(count && questions) &&
                                        questions.map((question, index) => {
                                            return (
                                                <TableRow key={question.id}>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{question.id}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{question.lesson.subject.name}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{question.lesson.name}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{question.dimensions.map((item) => item.name).toString()}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{question.content}</div>
                                                    </TableDescription>
                                                    <TableDescription>
                                                        <div className="text-gray-900">{question.questionLevel.description}</div>
                                                    </TableDescription>

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
                                                        <Link href={`${routes.adminQuestionListUrl}${routes.adminEditQuestionUrl}/${question.id}`}>
                                                            <p className="text-indigo-600 cursor-pointer hover:text-indigo-900">Edit</p>
                                                        </Link>
                                                        <p
                                                            onClick={() => _onToggleShowing(question)}
                                                            className="text-red-600 cursor-pointer hover:text-red-900"
                                                        >
                                                            Toggle showing
                                                        </p>
                                                    </TableDescription>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationBar currentPage={currentPage} numberOfItem={count} pageSize={pageSize} routeUrl={router.asPath} />
        </div>
    );
};
