import QuizQuestion from '../../components/question';
import * as React from 'react';
import QuizAnswer from '../quizAnswer';
import { convertQuestionListToQuestionAnswerToSend, findQuestionAndDoAction } from '../../../../core/util/question';
import { ClockIcon } from '@heroicons/react/outline';
import { FormWrapper } from '../../../../core/components/form';
import { useForm } from 'react-hook-form';
import { useGetQuizResultById } from '../../common/hooks/useGetQuizResultById';
import { QuizAnswerStatus } from '../../../../core/models/quiz';
import { ClientQuestionInQuiz } from '../../../../core/models/quizResult';
import { submitQuiz } from './action';
import { toast } from 'react-toastify';

interface DoQuizProps {
    id: string;
}

const quizAnswerStatus = [
    { label: 'Unanswered', value: QuizAnswerStatus.UNANSWERED },
    { label: 'Marked', value: QuizAnswerStatus.MARKED },
    { label: 'Answered', value: QuizAnswerStatus.ANSWERED },
    { label: 'All Questions', value: QuizAnswerStatus.ALL_QUESTION },
];

export const DoQuiz: React.FunctionComponent<DoQuizProps> = ({ id }) => {
    const [questionList, setQuestionList] = React.useState<ClientQuestionInQuiz[]>([]);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [answerStatus, setAnswerStatus] = React.useState<QuizAnswerStatus>(QuizAnswerStatus.ALL_QUESTION);

    const { quiz } = useGetQuizResultById(id);
    const [popUp, setPopUp] = React.useState<boolean>();

    const totalDone = React.useMemo(
        () =>
            questionList.reduce((prev, current) => {
                if (current.userAnswer) return prev + 1;
                else return prev;
            }, 0),
        [questionList]
    );

    const filteredQuestion = React.useMemo<string[]>(() => {
        switch (answerStatus) {
            case QuizAnswerStatus.ALL_QUESTION:
                return questionList.filter((item) => item).map((item) => item.id);

            case QuizAnswerStatus.ANSWERED:
                return questionList.filter((item) => item.userAnswer.length > 0).map((item) => item.id);
            case QuizAnswerStatus.MARKED:
                return questionList.filter((item) => item.isMarked === true).map((item) => item.id);
            case QuizAnswerStatus.UNANSWERED:
                return questionList.filter((item) => item.userAnswer.length === 0).map((item) => item.id);
        }
    }, [answerStatus, questionList]);

    React.useEffect(() => {
        if (quiz) {
            setQuestionList(quiz.attendedQuestions.map((item) => ({ ...item, userAnswer: [] })));
        }
        return () => {};
    }, [quiz]);

    React.useEffect(() => {}, [answerStatus]);

    const _onChangeQuestion = (type: 'previous' | 'next') => {
        switch (type) {
            case 'next':
                if (currentIndex < questionList.length - 1) setCurrentIndex((prev) => prev + 1);
                break;
            case 'previous':
                if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
                break;
        }
    };

    const _onCheckQuestionAnswer = (updateQuestionId: string, updateAnswerId: string) => {
        findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
            const newQuestionList = [...questionList];
            newQuestionList[i].userAnswer = [...newQuestionList[i].userAnswer, updateAnswerId];
            setQuestionList(newQuestionList);
        });
    };
    const _onUnCheckQuestionAnswer = (updateQuestionId: string, removeAnswerId: string) => {
        findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
            const newQuestionList = [...questionList];
            const index = newQuestionList[i].userAnswer.indexOf(removeAnswerId);
            newQuestionList[i].userAnswer.splice(index, 1);

            setQuestionList(newQuestionList);
        });
    };

    const _onResetCheckQuestion = (updateQuestionId: string, removeAnswerId: string) => {
        findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
            const newQuestionList = [...questionList];
            newQuestionList[i].userAnswer = [];

            setQuestionList(newQuestionList);
        });
    };

    const onToggleMarkQuestion = (updateQuestionId: string) => {
        findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
            const newQuestionList = [...questionList];
            newQuestionList[i].isMarked = !newQuestionList[i].isMarked;
            setQuestionList(newQuestionList);
        });
    };

    const methods = useForm();
    const _handleOnSubmit = async () => {
        const data = convertQuestionListToQuestionAnswerToSend(questionList);
        const res = await submitQuiz(data);
        if (res) {
            toast.success('Submit success!');
        }
    };

    return (
        <>
            {popUp && (
                <>
                    <div className="fixed z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                                <FormWrapper methods={methods}>
                                    <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="z-50 space-y-5">
                                        <div className="flex flex-col space-y-4">
                                            <p className="text-lg font-semibold">Exit Exam?</p>
                                            <p className="">
                                                You have not answer all questions. By clicking on the [Submit now] button below, you will completed
                                                your current exam and be return to the dashboard
                                            </p>
                                            <div className="flex space-x-2">
                                                <button
                                                    type="submit"
                                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Submit now
                                                </button>
                                                <button
                                                    onClick={() => setPopUp(false)}
                                                    type="submit"
                                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </FormWrapper>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setPopUp(false)} className="fixed top-0 left-0 z-10 w-screen h-screen cursor-pointer bg-gray-900/50"></div>
                </>
            )}
            <div className="flex space-x-10">
                <div className="flex flex-col flex-1 space-y-5">
                    {questionList.map((item, index) => (
                        <QuizQuestion
                            onToggleMarkQuestion={onToggleMarkQuestion}
                            onUnCheckQuestionAnswer={_onUnCheckQuestionAnswer}
                            onCheckQuestionAnswer={_onCheckQuestionAnswer}
                            onResetCheckQuestion={_onResetCheckQuestion}
                            key={item.id}
                            data={item}
                            index={index}
                            isShow={currentIndex === index}
                        />
                    ))}
                </div>
                <div className="flex flex-col space-y-5">
                    <div className="flex justify-between p-5 bg-white rounded-md">
                        <p className="font-semibold">
                            Total done: {totalDone}/{questionList.length}
                        </p>
                        <div className="flex items-center space-x-1">
                            <div className="w-6 h-6">
                                <ClockIcon />
                            </div>
                            <time className="font-semibold tracking-wider">00:10:48</time>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 space-y-3 bg-white rounded-md">
                        <h1 className="text-xl font-semibold">Quiz progress : </h1>
                        <div className="flex space-x-2">
                            {quizAnswerStatus.map((item) => (
                                <button
                                    key={item.value}
                                    onClick={() => setAnswerStatus(item.value)}
                                    type="button"
                                    className={` ${
                                        item.value === answerStatus ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500' : 'bg-gray-500'
                                    } inline-flex items-center px-4 py-2  font-medium text-white  border border-transparent rounded-md shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-10 gap-3 w-fit h-fit">
                            <QuizAnswer
                                filterQuestion={filteredQuestion}
                                data={questionList}
                                setCurrentIndex={setCurrentIndex}
                                currentIndex={currentIndex}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-5">
                        <button
                            onClick={() => _onChangeQuestion('previous')}
                            disabled={currentIndex === 0}
                            type="button"
                            className={`${
                                currentIndex === 0 ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                            } inline-flex items-center px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => _onChangeQuestion('next')}
                            type="button"
                            disabled={currentIndex === questionList.length - 1}
                            className={`${
                                currentIndex === questionList.length - 1 ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                            } inline-flex items-center px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                        >
                            Next
                        </button>
                        <button
                            onClick={() => setPopUp(true)}
                            type="button"
                            className={`bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 inline-flex items-center px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                        >
                            Score Exam now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
