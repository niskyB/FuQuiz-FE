import * as React from 'react';
import { findQuestionAndDoAction } from '../../../../core/util/question';
import { QuizQuestionDTO } from '../../../quiz/containers/doQuiz/interface';

import QuizQuestionReadonly from '../../components/QuizQuestionReadonly';
import QuizAnswerReadonly from '../../components/QuizAnswerReadonly';
import HintAnswer from '../../components/hintAnswer';

interface ReviewPracticeProps {
    id: string;
}
const QUESTIONS_LIST: QuizQuestionDTO[] = [];
const quizAnswerStatus = [
    { label: 'Unanswered', value: 'unanswered' },
    { label: 'Marked', value: 'marked' },
    { label: 'Correct', value: 'correct' },
    { label: 'Incorrect', value: 'Incorrect' },
    { label: 'All Questions', value: 'allQuestions' },
];

export const ReviewPractice: React.FunctionComponent<ReviewPracticeProps> = ({ id }) => {
    const [questionList, setQuestionList] = React.useState<QuizQuestionDTO[]>(QUESTIONS_LIST);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [hint, setHint] = React.useState<boolean>(false);
    const [answerStatus, setAnswerStatus] = React.useState<string>('allQuestions');

    // const totalDone = React.useMemo(
    //     () =>
    //         questionList.reduce((prev, current) => {
    //             if (current.userAnswer) return prev + 1;
    //             else return prev;
    //         }, 0),
    //     [questionList]
    // );

    // const onToggleMarkQuestion = (updateQuestionId: string) => {
    //     findQuestionAndDoAction(questionList, updateQuestionId, (i) => {
    //         const newQuestionList = [...questionList];
    //         newQuestionList[i].isMarked = !newQuestionList[i].isMarked;
    //         setQuestionList(newQuestionList);
    //     });
    // };

    // const _onChangeQuestion = (type: 'previous' | 'next') => {
    //     switch (type) {
    //         case 'next':
    //             if (currentIndex < questionList.length - 1) setCurrentIndex((prev) => prev + 1);
    //             break;
    //         case 'previous':
    //             if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    //             break;
    //     }
    // };

    return (
        <div className="flex space-x-10">
            {/* <div className="flex flex-col flex-1">
                {questionList.map((item, index) => (
                    <div key={item.id}>
                        <QuizQuestionReadonly
                            onToggleMarkQuestion={onToggleMarkQuestion}
                            data={item}
                            index={index}
                            isShow={currentIndex === index}
                            rightAnswer={'1'}
                            _onUpdateHintQuestion={() => setHint(!hint)}
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
                <div className="flex flex-col p-5 space-y-3 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Quiz Review Results : </h1>
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
                        <QuizAnswerReadonly
                            data={questionList}
                            setCurrentIndex={setCurrentIndex}
                            currentIndex={currentIndex}
                            rightAnswer={{ detail: '', id: '1', isCorrect: true }}
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
                </div>
            </div> */}
        </div>
    );
};
