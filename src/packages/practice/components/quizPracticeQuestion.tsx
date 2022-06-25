import { ChangeEvent } from 'react';
import * as React from 'react';
import { BookmarkIcon, LightBulbIcon } from '@heroicons/react/outline';
import { QuizQuestionDTO } from '../../quiz/containers/doQuiz/interface';

interface QuizPracticeQuestionProps {
    data: QuizQuestionDTO;
    index: number;
    isShow: boolean;
    _onUpdateHintQuestion: Function;
    onSetQuestionAnswer: (questionId: string, answerId: string | null) => void;
    onToggleMarkQuestion: (questionId: string) => void;
}

export const QuizPracticeQuestion: React.FunctionComponent<QuizPracticeQuestionProps> = ({
    data,
    index,
    isShow,
    onSetQuestionAnswer,
    onToggleMarkQuestion: onSetMarkQuestion,
    _onUpdateHintQuestion,
}) => {
    const _onCheckBoxChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        if (e.target.checked) onSetQuestionAnswer(data.id, id);
        else onSetQuestionAnswer(data.id, null);
    };

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
                            <div key={item.id} className="relative flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id={item.id}
                                        onChange={(e) => _onCheckBoxChange(e, item.id)}
                                        type="checkbox"
                                        checked={data.userAnswer === item.id}
                                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded cursor-pointer focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor={item.id} className="font-medium text-black cursor-pointer">
                                        {item.detail}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </fieldset>
                </div>
            </div>
        );
    return <></>;
};
