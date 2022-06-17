import * as React from 'react';
import { findQuestionAndDoAction } from '../../../../core/util/question';
import { ClockIcon } from '@heroicons/react/outline';
import { FormWrapper, SelectField, TextField } from '../../../../core/components/form';
import { useForm } from 'react-hook-form';
import { QuizQuestionDTO } from '../../../quiz/containers/doQuiz/interface';
import QuizQuestion from '../../../quiz/components/question';
import QuizAnswer from '../../../quiz/containers/quizAnswer';
import HintAnswer from '../../../practices/components/hintAnswer';
import { QuizPracticeQuestion } from '../../components/quizPracticeQuestion';

interface QuizPracticeProps {
    id: string;
}
const QUESTIONS_LIST: QuizQuestionDTO[] = [
    {
        id: 'q1',
        answers: [
            { id: '1', details: 'Impact analysis assesses the effect on the system of a defect found in regression testing.' },
            { id: '2', details: 'Impact analysis assesses the effect of a new person joining the regression test team.' },
            { id: '3', details: 'Impact analysis assesses whether or not a defect found in regression testing has been fixed correctly.' },
            {
                id: '4',
                details: 'Impact analysis assesses the effect of a change to the system to determine how much regression testing to do',
            },
        ],
        content: 'Which of the following is correct?',
        isActive: true,
        // lessonType: { id: 'l1', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 1', type: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: null,
    },
    {
        id: 'q2',
        answers: [
            { id: '1', details: 'To enhance the security of the system' },
            { id: '2', details: 'To prevent the endless loops in code.' },
            { id: '3', details: 'To swerve as an alternative or "Plan-B"' },
            {
                id: '4',
                details: 'To define when to stop testing',
            },
        ],
        content: 'In software testing what is the main purpose of exit criteria?',
        isActive: true,
        // lessonType: { id: 'l2', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 2', type: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: null,
    },
    {
        id: 'q3',
        answers: [
            { id: '1', details: 'Login Browse Basket Checkout Basket Checkout Pay Logout.' },
            { id: '2', details: 'Login Browse Basket Checkout Pay Logout.' },
            { id: '3', details: 'Login Browse Basket Checkout Basket Logout.' },
            {
                id: '4',
                details: 'Login Browse Basket Browse Basket Checkout Pay Logout.',
            },
        ],
        content:
            'Given the following state transition diagram Which of the following series of state transitions contains an INVALID transition which may indicate a fault in the system design?',
        isActive: true,
        // lessonType: { id: 'l3', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 3', type: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: null,
    },
    {
        id: 'q4',
        answers: [
            { id: '1', details: 'Ensuring proper environment setup' },
            { id: '2', details: 'Writing a test summary report' },
            { id: '3', details: 'Assessing the need for additional tests' },
            {
                id: '4',
                details: 'Finalizing and archiving testware.',
            },
        ],
        content: 'Which of the following is a KEY test closure task?',
        isActive: true,
        // lessonType: { id: 'l4', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 4', type: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: null,
    },
];

const quizAnswerStatus = [
    { label: 'Unanswered', value: 'unanswered' },
    { label: 'Marked', value: 'marked' },
    { label: 'Answered', value: 'answered' },
    { label: 'All Questions', value: 'allQuestions' },
];

export const QuizPractice: React.FunctionComponent<QuizPracticeProps> = ({ id }) => {
    const [questionList, setQuestionList] = React.useState<QuizQuestionDTO[]>(QUESTIONS_LIST);
    const [questionFilter, setQuestionFilters] = React.useState<QuizQuestionDTO[]>(QUESTIONS_LIST);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [answerStatus, setAnswerStatus] = React.useState<string>('allQuestions');
    const [hint, setHint] = React.useState<boolean>(false);

    const [popUp, setPopUp] = React.useState<boolean>();

    const totalDone = React.useMemo(
        () =>
            questionList.reduce((prev, current) => {
                if (current.userAnswerId) return prev + 1;
                else return prev;
            }, 0),
        [questionList]
    );

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

    const onSetQuestionAnswer = (updateQuestionId: string, updateAnswerId: string | null) => {
        findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
            const newQuestionList = [...questionList];
            newQuestionList[i].userAnswerId = updateAnswerId;
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
    const _handleOnSubmit = () => {};

    return (
        <div className="flex space-x-10">
            {popUp ? (
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900/50">
                    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 intro-y">
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                                <FormWrapper methods={methods}>
                                    <form onSubmit={methods.handleSubmit(_handleOnSubmit)} className="space-y-5">
                                        <div className="flex flex-col space-y-4">
                                            <p className="text-lg font-semibold">Exit Exam?</p>
                                            <p className="">
                                                You have not answer any questions. By clicking on the [Submit now] button below, you will completed
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
                </div>
            ) : (
                <></>
            )}
            <div className="flex flex-col flex-1">
                {questionList.map((item, index) => (
                    <div key={item.id} className="space-y-5">
                        <QuizPracticeQuestion
                            _onUpdateHintQuestion={() => setHint(!hint)}
                            onToggleMarkQuestion={onToggleMarkQuestion}
                            onSetQuestionAnswer={onSetQuestionAnswer}
                            key={item.id}
                            data={item}
                            index={index}
                            isShow={currentIndex === index}
                        />
                        {hint ? (
                            <HintAnswer
                                key={`hint-${index}`}
                                isShow={currentIndex === index}
                                data={{ content: 'Something explain', domain: 'Domain 1', source: 'Page 23' }}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
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
                                className={`bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 inline-flex items-center px-4 py-2  font-medium text-white  border border-transparent rounded-md shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  `}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-10 gap-3 w-fit h-fit">
                        <QuizAnswer data={questionList} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
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
    );
};
