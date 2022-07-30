import QuizQuestion from '../../components/question';
import * as React from 'react';
import QuizAnswer from '../quizAnswer';
import { BadgeCheckIcon, ClockIcon } from '@heroicons/react/outline';
import { useGetQuizResultById } from '../../common/hooks/useGetQuizResultById';
import { QuizAnswerStatus } from '../../../../core/models/quiz';
import { ClientQuestionInQuiz } from '../../../../core/models/quizResult';
import { submitQuiz } from './action';
import { toast } from 'react-toastify';
import { constant } from '../../../../core/constant';
import Countdown from 'react-countdown';
import { useRouter } from 'next/router';
import useIsFirstRender from '../../../../core/common/hooks/useIsFirstRender';
import { DoQuizType } from './interface';
import { routes } from '../../../../core/routes';
import Link from 'next/link';
import useTimeout from '../../../../core/common/hooks/useTimeout';
import { convertQuestionListToQuestionAnswerToSend, findQuestionAndDoAction } from '../../../../core/util/question';

interface DoQuizProps {
    id: string;
    mode: DoQuizType;
}

const quizAnswerStatus = [
    { label: 'Unanswered', value: QuizAnswerStatus.UNANSWERED },
    { label: 'Marked', value: QuizAnswerStatus.MARKED },
    { label: 'Answered', value: QuizAnswerStatus.ANSWERED },
    { label: 'All Questions', value: QuizAnswerStatus.ALL_QUESTION },
];

export const DoQuiz: React.FunctionComponent<DoQuizProps> = ({ id, mode }) => {
    const router = useRouter();

    const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
    const [questionList, setQuestionList] = React.useState<ClientQuestionInQuiz[]>([]);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [answerStatus, setAnswerStatus] = React.useState<QuizAnswerStatus>(QuizAnswerStatus.ALL_QUESTION);

    const isInitRender = useIsFirstRender();
    const { quiz } = useGetQuizResultById(id);

    useTimeout(() => {
        if (!quiz) {
            router.push(routes.homeUrl);
            toast.warn("Quiz doesn't exist");
        }
    }, 1000);
    const [popUp, setPopUp] = React.useState<boolean>();

    const totalDone = React.useMemo(
        () =>
            questionList.reduce((prev, current) => {
                if (current.userAnswers.length > 0) return prev + 1;
                else return prev;
            }, 0),
        [questionList]
    );
    const isDone = React.useMemo(() => {
        if (totalDone >= questionList.length) {
            return true;
        }
        return false;
    }, [totalDone, questionList]);

    const filteredQuestion = React.useMemo<string[]>(() => {
        switch (answerStatus) {
            case QuizAnswerStatus.ALL_QUESTION:
                return questionList.filter((item) => item).map((item) => item.id);
            case QuizAnswerStatus.ANSWERED:
                return questionList.filter((item) => item.userAnswers.length > 0).map((item) => item.id);
            case QuizAnswerStatus.MARKED:
                return questionList.filter((item) => item.isMarked === true).map((item) => item.id);
            case QuizAnswerStatus.UNANSWERED:
                return questionList.filter((item) => item.userAnswers.length === 0).map((item) => item.id);
        }
    }, [answerStatus, questionList]);

    React.useEffect(() => {
        if (quiz) {
            switch (mode) {
                case DoQuizType.TEST:
                    const currentTestId = localStorage.getItem(constant.PROGRESS_TEST_ID);
                    const currentProgress = JSON.parse(localStorage.getItem(constant.PROGRESS_TEST) || '[]') as ClientQuestionInQuiz[];
                    if (currentTestId === quiz.id) {
                        if (currentProgress.length !== 0) setQuestionList(currentProgress);
                    } else {
                        localStorage.setItem(constant.PROGRESS_TEST_ID, quiz.id);
                        setQuestionList(quiz.attendedQuestions.map((item) => ({ ...item })));
                    }

                    break;
                case DoQuizType.REVIEW:
                    setQuestionList(quiz.attendedQuestions.map((item) => ({ ...item })));
                    break;
            }
        }
        return () => {};
    }, [quiz]);

    React.useEffect(() => {
        if (!isInitRender && mode === DoQuizType.TEST) {
            localStorage.setItem(constant.PROGRESS_TEST, JSON.stringify(questionList));
        }
        return () => {};
    }, [questionList]);

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
            newQuestionList[i].userAnswers = [...newQuestionList[i].userAnswers, updateAnswerId];
            setQuestionList(newQuestionList);
        });
    };
    const _onUnCheckQuestionAnswer = (updateQuestionId: string, removeAnswerId: string) => {
        findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
            const newQuestionList = [...questionList];
            const index = newQuestionList[i].userAnswers.indexOf(removeAnswerId);
            newQuestionList[i].userAnswers.splice(index, 1);

            setQuestionList(newQuestionList);
        });
    };

    const _onResetCheckQuestion = (updateQuestionId: string) => {
        findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
            const newQuestionList = [...questionList];
            newQuestionList[i].userAnswers = [];

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

    const _handleOnSubmit = async () => {
        if (mode === DoQuizType.TEST) {
            const data = convertQuestionListToQuestionAnswerToSend(questionList);
            const res = await submitQuiz(data);
            if (res) {
                setIsSubmitted(true);
                localStorage.setItem(constant.PROGRESS_TEST, '[]');
                localStorage.setItem(constant.PROGRESS_TEST_ID, '');

                router.push(`${routes.quizUrl}/review/${id}`);
                toast.success('Submit success!');
            }
        }
    };

    return (
        <>
            {popUp && (
                <>
                    <div className="fixed z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                                <div className="z-50 space-y-5">
                                    <div className="flex flex-col space-y-4">
                                        <p className="text-lg font-semibold">Score Exam?</p>
                                        {totalDone !== 0 && !isDone && (
                                            <p className="text-red-500">
                                                {totalDone} of {questionList.length} Questions Answered
                                            </p>
                                        )}
                                        <p className="">
                                            {totalDone === 0
                                                ? 'You have not answer any questions. By clicking on the [Exit exam] button below, you will complete your current exam and be returned to the dashboard!'
                                                : 'By clicking on the [Score Exam] button below, you will complete your current exam and receive your score. You will not be able to change any answers after this point.'}
                                        </p>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => setPopUp(false)}
                                                type="submit"
                                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (totalDone === 0) {
                                                        router.back();
                                                    } else {
                                                        _handleOnSubmit();
                                                    }
                                                }}
                                                type="submit"
                                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                {totalDone === 0 ? 'Exit Exam' : 'Score Exam'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
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
                            mode={mode}
                        />
                    ))}
                </div>
                <div className="flex flex-col space-y-5">
                    <div className="flex justify-between p-5 bg-white rounded-md">
                        <p className="font-semibold">
                            Total done: {totalDone}/{questionList.length}
                        </p>
                        {mode === DoQuizType.TEST && (
                            <div className="flex items-center space-x-1">
                                <div className="w-6 h-6">
                                    <ClockIcon />
                                </div>
                                <time className="font-semibold tracking-wider">
                                    {quiz && (
                                        <Countdown
                                            date={
                                                new Date(quiz.createdAt).getTime() +
                                                quiz.attendedQuestions[0].questionInQuiz.quiz.duration * 60 * 1000
                                            }
                                            renderer={({ hours, minutes, seconds, completed }) => {
                                                if (completed && !isSubmitted) {
                                                    _handleOnSubmit();

                                                    return <>Time out</>;
                                                }

                                                let hourString, minuteString, secondString;
                                                if (hours < 10) {
                                                    hourString = `0${hours}`;
                                                }
                                                if (minutes < 10) {
                                                    minuteString = `0${minutes}`;
                                                }
                                                if (seconds < 10) {
                                                    secondString = `0${seconds}`;
                                                }
                                                return (
                                                    <>
                                                        {hourString || hours}:{minuteString || minutes}:{secondString || seconds}
                                                    </>
                                                );
                                            }}
                                        />
                                    )}
                                </time>
                            </div>
                        )}

                        {mode === DoQuizType.REVIEW && quiz && (
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 text-green-500 ">
                                    <BadgeCheckIcon />
                                </div>
                                <div className="">Mark: {quiz.rate * 100}%</div>
                            </div>
                        )}
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
                                mode={mode}
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
                        {mode === DoQuizType.TEST && totalDone === 0 && (
                            <button
                                onClick={() => setPopUp(true)}
                                type="button"
                                className={`bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 inline-flex items-center px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                            >
                                Go back
                            </button>
                        )}
                        {mode === DoQuizType.TEST && totalDone > 0 && (
                            <button
                                onClick={() => setPopUp(true)}
                                type="button"
                                className={`bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 inline-flex items-center px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                            >
                                Score Exam now
                            </button>
                        )}
                        {mode === DoQuizType.REVIEW && (
                            <Link href={routes.practiceListUrl}>
                                <a
                                    className={`bg-red-600 hover:bg-red-700 focus:ring-red-500 inline-flex items-center px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                                >
                                    Return practice list
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
