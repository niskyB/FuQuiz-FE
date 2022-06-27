import { ChangeEvent } from 'react';
import * as React from 'react';
import { BookmarkIcon, CheckIcon, XIcon } from '@heroicons/react/outline';
import { ClientQuestionInQuiz } from '../../../core/models/quizResult';
import { DoQuizType } from '../containers/doQuiz/interface';

interface QuizQuestionProps {
    data: ClientQuestionInQuiz;
    index: number;
    isShow: boolean;
    onCheckQuestionAnswer: (questionId: string, answerId: string) => void;
    onUnCheckQuestionAnswer: (questionId: string, answerId: string) => void;
    onResetCheckQuestion: (questionId: string) => void;
    onToggleMarkQuestion: (questionId: string) => void;
    mode: DoQuizType;
}

const QuizQuestion: React.FunctionComponent<QuizQuestionProps> = ({
    data,
    index,
    isShow,
    onCheckQuestionAnswer,
    onUnCheckQuestionAnswer,
    onResetCheckQuestion,
    onToggleMarkQuestion,
    mode,
}) => {
    const _onCheckBoxChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        if (data.questionInQuiz.question.isMultipleChoice) {
            if (e.target.checked) onCheckQuestionAnswer(data.id, id);
            else onUnCheckQuestionAnswer(data.id, id);
        } else {
            onResetCheckQuestion(data.id);
            onCheckQuestionAnswer(data.id, id);
        }
    };

    const _onUpdateQuestionMark = () => {
        onToggleMarkQuestion(data.id);
    };
    if (isShow)
        return (
            <div className="px-5 py-5 space-y-2 text-base bg-white rounded-md">
                <div className="flex justify-between">
                    <h1 className="font-bold">Question {index + 1}</h1>
                    <div
                        onClick={() => {
                            if (mode === DoQuizType.TEST) _onUpdateQuestionMark();
                        }}
                        className={`w-8 h-8 cursor-pointer ${data.isMarked ? 'text-orange-500 ' : 'text-gray-500'}`}
                    >
                        <BookmarkIcon />
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="font-semibold">{data.questionInQuiz.question.content}</p>
                    <fieldset className="space-y-5">
                        {data.questionInQuiz.question.answers.map((item) => {
                            const isChoose = React.useMemo(() => {
                                if (data.userAnswers.includes(item.id)) return true;
                                return false;
                            }, [data.userAnswers]);
                            const { isMultipleChoice } = data.questionInQuiz.question;
                            return (
                                <div key={item.id} className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id={item.id}
                                            onChange={(e) => {
                                                if (mode === DoQuizType.TEST) _onCheckBoxChange(e, item.id);
                                            }}
                                            type={isMultipleChoice ? 'checkbox' : 'radio'}
                                            checked={data.userAnswers.includes(item.id)}
                                            className={`w-4 h-4 text-indigo-600 border-gray-300    focus:ring-indigo-500 ${
                                                mode === DoQuizType.TEST ? 'cursor-pointer' : 'cursor-not-allowed'
                                            } ${isMultipleChoice ? 'rounded' : 'rounded-full'}`}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor={item.id}
                                            className={`font-medium text-black cursor-pointer  ${
                                                mode === DoQuizType.TEST ? 'cursor-pointer' : 'cursor-text'
                                            }`}
                                        >
                                            {item.detail}
                                        </label>
                                    </div>
                                    {mode === DoQuizType.REVIEW && isChoose && !item.isCorrect && (
                                        <div className="w-5 h-5 ml-5 text-red-700">
                                            <XIcon />
                                        </div>
                                    )}

                                    {mode === DoQuizType.REVIEW && item.isCorrect && (
                                        <div className="w-5 h-5 ml-5 text-green-700">
                                            <CheckIcon />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </fieldset>
                </div>
            </div>
        );
    return <></>;
};

export default QuizQuestion;
