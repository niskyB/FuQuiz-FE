import { ChangeEvent } from 'react';
import * as React from 'react';
import { BookmarkIcon, CheckIcon, LightBulbIcon, PhotographIcon, VolumeUpIcon, XIcon } from '@heroicons/react/outline';
import { ClientQuestionInQuiz } from '../../../core/models/quizResult';
import { DoQuizType } from '../containers/doQuiz/interface';
import { store } from '../../../core/store';
import { UIActions } from '../../../core/store/ui';

import { parse } from 'query-string';
import { getYoutubeCode } from '../../../core/util';
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
            <>
                <div className="px-5 py-5 space-y-5 text-base bg-white rounded-md">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Question {index + 1}</h1>
                        <div className="flex space-x-5">
                            {mode === DoQuizType.REVIEW && (
                                <div
                                    onClick={() => {
                                        store.dispatch(
                                            UIActions.setPopUp({ title: 'Explanation', description: data.questionInQuiz.question.explanation })
                                        );
                                    }}
                                    className={`w-8 h-8 cursor-pointer text-gray-500 }`}
                                >
                                    <LightBulbIcon />
                                </div>
                            )}
                            <div
                                onClick={() => {
                                    if (mode === DoQuizType.TEST) _onUpdateQuestionMark();
                                }}
                                className={`w-8 h-8 cursor-pointer ${data.isMarked ? 'text-orange-500 ' : 'text-gray-500'}`}
                            >
                                <BookmarkIcon />
                            </div>
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
                    <div className="flex flex-col space-y-3 ">
                        <h1 className="font-bold">Material</h1>
                        {data.questionInQuiz.question.imageUrl && (
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center space-x-1 font-semibold">
                                    <div className="w-5 h-5">
                                        <PhotographIcon />
                                    </div>

                                    <div className="">Image :</div>
                                </div>
                                <img className="" src={data.questionInQuiz.question.imageUrl} alt={data.questionInQuiz.question.id} />
                            </div>
                        )}
                        {data.questionInQuiz.question.videoLink && (
                            <div className="flex flex-col space-y-3 ">
                                <div className="flex items-center space-x-1 font-semibold">
                                    <div className="w-5 h-5">
                                        <PhotographIcon />
                                    </div>

                                    <div className="">Video :</div>
                                </div>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${getYoutubeCode(data.questionInQuiz.question.videoLink)}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        )}

                        {data.questionInQuiz.question.audioLink && (
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center space-x-1 font-semibold">
                                    <div className="w-5 h-5">
                                        <VolumeUpIcon />
                                    </div>

                                    <div className="">Audio :</div>
                                </div>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${getYoutubeCode(data.questionInQuiz.question.audioLink)}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    return <></>;
};

export default QuizQuestion;
