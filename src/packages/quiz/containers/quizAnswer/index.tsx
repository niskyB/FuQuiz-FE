import { QuizQuestionDTO } from '../doQuiz/interface';

interface QuizAnswerProps {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    data: QuizQuestionDTO[];
}

const QuizAnswer: React.FunctionComponent<QuizAnswerProps> = ({ currentIndex, setCurrentIndex, data }) => {
    return (
        <>
            {data.map((item, index) => (
                <div
                    className={`relative flex items-center justify-center text-white  rounded-lg cursor-pointer w-10 h-10 ${
                        currentIndex === index
                            ? 'bg-orange-400 text-white'
                            : item.userAnswerId
                            ? 'bg-gray-500'
                            : 'border border-solid border-gray-500 text-black'
                    }`}
                    key={`question-${index}`}
                    onClick={() => setCurrentIndex(index)}
                >
                    {index + 1}
                    {item.isMarked && <div className="absolute w-3 h-3 bg-red-400 rounded-full -top-1 -right-1"></div>}
                </div>
            ))}
        </>
    );
};

export default QuizAnswer;
