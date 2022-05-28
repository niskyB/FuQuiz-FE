import * as React from 'react';
import { QuizQuestionDTO } from '../../../quiz/containers/doQuiz/interface';
import QuizQuestionReadonly from '../../components/QuizQuestionReadonly';
import QuizAnswerReadonly from '../../components/QuizAnswerReadonly';

interface ReviewPracticeProps {
    id: string;
}
const QUESTIONS_LIST: QuizQuestionDTO[] = [
    {
        id: 'q1',
        answers: [
            { id: '1', answerContent: 'Impact analysis assesses the effect on the system of a defect found in regression testing.' },
            { id: '2', answerContent: 'Impact analysis assesses the effect of a new person joining the regression test team.' },
            { id: '3', answerContent: 'Impact analysis assesses whether or not a defect found in regression testing has been fixed correctly.' },
            {
                id: '3',
                answerContent: 'Impact analysis assesses the effect of a change to the system to determine how much regression testing to do',
            },
        ],
        content: 'Which of the following is correct?',
        isActive: true,
        // lessonType: { id: 'l1', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 1', typeId: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: '2',
    },
    {
        id: 'q2',
        answers: [
            { id: '1', answerContent: 'To enhance the security of the system' },
            { id: '2', answerContent: 'To prevent the endless loops in code.' },
            { id: '3', answerContent: 'To swerve as an alternative or "Plan-B"' },
            {
                id: '4',
                answerContent: 'To define when to stop testing',
            },
        ],
        content: 'In software testing what is the main purpose of exit criteria?',
        isActive: true,
        // lessonType: { id: 'l2', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 2', typeId: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: '4',
    },
    {
        id: 'q3',
        answers: [
            { id: '1', answerContent: 'Login Browse Basket Checkout Basket Checkout Pay Logout.' },
            { id: '2', answerContent: 'Login Browse Basket Checkout Pay Logout.' },
            { id: '3', answerContent: 'Login Browse Basket Checkout Basket Logout.' },
            {
                id: '4',
                answerContent: 'Login Browse Basket Browse Basket Checkout Pay Logout.',
            },
        ],
        content:
            'Given the following state transition diagram Which of the following series of state transitions contains an INVALID transition which may indicate a fault in the system design?',
        isActive: true,
        // lessonType: { id: 'l3', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 3', typeId: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: '1',
    },
    {
        id: 'q4',
        answers: [
            { id: '1', answerContent: 'Ensuring proper environment setup' },
            { id: '2', answerContent: 'Writing a test summary report' },
            { id: '3', answerContent: 'Assessing the need for additional tests' },
            {
                id: '4',
                answerContent: 'Finalizing and archiving testware.',
            },
        ],
        content: 'Which of the following is a KEY test closure task?',
        isActive: true,
        // lessonType: { id: 'l4', name: 'Quiz' },
        dimension: { id: '', description: '', name: 'Domain 4', typeId: { id: '1', name: '' } },
        isMarked: false,
        userAnswerId: '1',
    },
];

export const ReviewPractice: React.FunctionComponent<ReviewPracticeProps> = ({ id }) => {
    const [questionList, setQuestionList] = React.useState<QuizQuestionDTO[]>(QUESTIONS_LIST);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);

    const totalDone = React.useMemo(
        () =>
            questionList.reduce((prev, current) => {
                if (current.userAnswerId) return prev + 1;
                else return prev;
            }, 0),
        [questionList]
    );

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

    return (
        <div className="flex space-x-10">
            <div className="flex flex-col flex-1 space-y-5">
                {questionList.map((item, index) => (
                    <QuizQuestionReadonly key={item.id} data={item} index={index} isShow={currentIndex === index} rightAnswer={'1'} />
                ))}
            </div>
            <div className="flex flex-col space-y-5">
                <div className="flex flex-col p-5 space-y-3 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Quiz progress : </h1>
                    <div className="grid grid-cols-10 gap-3 w-fit h-fit">
                        <QuizAnswerReadonly data={questionList} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} rightAnswer={'1'} />
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
                </div>
            </div>
        </div>
    );
};
