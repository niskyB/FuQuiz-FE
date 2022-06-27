import { ClientQuestionInQuiz } from '../../../../core/models/quizResult';
import * as React from 'react';
import { DoQuizType } from '../doQuiz/interface';

interface QuizAnswerProps {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    data: ClientQuestionInQuiz[];
    filterQuestion: string[];
    mode: DoQuizType;
}

const QuizAnswer: React.FunctionComponent<QuizAnswerProps> = ({ currentIndex, setCurrentIndex, data, filterQuestion, mode }) => {
    return (
        <>
            {data.map((item, index) => {
                const isCorrectAnswer = React.useMemo(() => {
                    for (let j = 0; j < item.questionInQuiz.question.answers.length; j++) {
                        const answer = item.questionInQuiz.question.answers[j];
                        if (answer.isCorrect) {
                            if (!item.userAnswers.includes(answer.id)) {
                                return false;
                            }
                        }
                    }
                    return true;
                }, []);

                if (filterQuestion.includes(item.id))
                    return (
                        <div
                            className={`relative flex items-center justify-center text-white  rounded-lg cursor-pointer w-10 h-10 ${
                                currentIndex === index
                                    ? 'bg-indigo-500 text-white'
                                    : mode === DoQuizType.TEST
                                    ? item.userAnswers.length > 0
                                        ? 'bg-green-500'
                                        : 'border border-solid border-gray-500 text-black'
                                    : isCorrectAnswer
                                    ? 'bg-green-500'
                                    : 'bg-red-500'
                            }`}
                            key={`question-${index}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {index + 1}
                            {item.isMarked && <div className="absolute w-3 h-3 bg-orange-400 rounded-full -top-1 -right-1"></div>}
                        </div>
                    );
                else return <></>;
            })}
            <div
                className={`relative flex items-center justify-center text-white  rounded-lg cursor-pointer w-10 h-10 ${'bg-gray-500 text-white invisible'}`}
            >
                a
            </div>
        </>
    );
};

export default QuizAnswer;
