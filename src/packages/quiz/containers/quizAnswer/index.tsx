import { ClientQuestionInQuiz } from '../../../../core/models/quizResult';

interface QuizAnswerProps {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    data: ClientQuestionInQuiz[];
    filterQuestion: string[];
}

const QuizAnswer: React.FunctionComponent<QuizAnswerProps> = ({ currentIndex, setCurrentIndex, data, filterQuestion }) => {
    return (
        <>
            {data.map((item, index) => {
                if (filterQuestion.includes(item.id))
                    return (
                        <div
                            className={`relative flex items-center justify-center text-white  rounded-lg cursor-pointer w-10 h-10 ${
                                currentIndex === index
                                    ? 'bg-gray-500 text-white'
                                    : item.userAnswer.length > 0
                                    ? 'bg-green-500'
                                    : 'border border-solid border-gray-500 text-black'
                            }`}
                            key={`question-${index}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {index + 1}
                            {item.isMarked && <div className="absolute w-3 h-3 bg-red-400 rounded-full -top-1 -right-1"></div>}
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
