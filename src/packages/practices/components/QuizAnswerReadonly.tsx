import { Answer } from '../../../core/models/answer';
import { QuizQuestionDTO } from '../../quiz/containers/doQuiz/interface';

interface QuizAnswerReadonlyProps {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    data: QuizQuestionDTO[];
    rightAnswer: Answer;
}

const QuizAnswerReadonly: React.FunctionComponent<QuizAnswerReadonlyProps> = ({ currentIndex, setCurrentIndex, data, rightAnswer }) => {
    return (
        <>
            {data.map((item, index) => (
                <div
                    className={`relative flex items-center justify-center text-white  rounded-lg cursor-pointer w-10 h-10 ${
                        currentIndex === index ? 'bg-gray-500 text-white' : item.userAnswerId === rightAnswer.id ? 'bg-green-500' : 'bg-red-500'
                    } ${currentIndex === index ? 'border border-solid' : ''}`}
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

export default QuizAnswerReadonly;
