import * as React from 'react';
import { QuizQuestionDTO } from '../../quiz/containers/doQuiz/interface';
import { CheckCircleIcon, LightBulbIcon, XCircleIcon } from '@heroicons/react/outline';
import { BookmarkIcon } from '@heroicons/react/solid';

interface QuizQuestionReadonlyProps {
    data: QuizQuestionDTO;
    index: number;
    isShow: boolean;
    rightAnswer: string;
    _onUpdateHintQuestion: Function;
    onToggleMarkQuestion: (questionId: string) => void;
}

const QuizQuestionReadonly: React.FunctionComponent<QuizQuestionReadonlyProps> = ({
    data,
    index,
    isShow,
    rightAnswer,
    _onUpdateHintQuestion,
    onToggleMarkQuestion: onSetMarkQuestion,
}) => {
    const _onUpdateQuestionMark = () => {
        onSetMarkQuestion(data.id);
    };

    if (isShow)
        return (
            <div className="px-5 py-5 space-y-2 text-base bg-white rounded-md">
                <div className="flex justify-between">
                    <h1 className="font-bold">Question {index + 1}</h1>
                    <div className="flex items-center space-x-2">
                        <div onClick={() => _onUpdateHintQuestion()} className={`w-8 h-8 cursor-pointer text-gray-500`}>
                            <LightBulbIcon />
                        </div>
                        <div
                            onClick={_onUpdateQuestionMark}
                            className={`w-8 h-8 cursor-pointer ${data.isMarked ? 'text-orange-500 ' : 'text-gray-500'}`}
                        >
                            <BookmarkIcon />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="font-semibold">{data.content}</p>
                    <fieldset className="space-y-5">
                        <legend className="sr-only">Notifications</legend>
                        {data.answers.map((item) => (
                            <div key={`answer-${item.id}`} className="relative flex items-center">
                                <div className="flex items-center h-5">
                                    <input
                                        id={item.id}
                                        type="checkbox"
                                        defaultChecked={data.userAnswer === item.id}
                                        disabled={true}
                                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded cursor-pointer focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="flex items-center ml-3 space-x-2 text-sm">
                                    <label htmlFor={item.id} className="font-medium text-black cursor-pointer">
                                        {item.detail}
                                    </label>
                                    <div className="w-8 h-8">
                                        {item.id === data.userAnswer || item.id === rightAnswer ? (
                                            item.id === rightAnswer ? (
                                                <div className="text-green-500">
                                                    <CheckCircleIcon />
                                                </div>
                                            ) : (
                                                <div className="text-red-500">
                                                    <XCircleIcon />
                                                </div>
                                            )
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </fieldset>
                </div>
            </div>
        );
    return <></>;
};

export default QuizQuestionReadonly;
