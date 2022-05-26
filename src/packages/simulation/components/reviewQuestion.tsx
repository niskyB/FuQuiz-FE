import * as React from 'react';
import { Question } from '../../../core/models/question';

interface ReviewQuestionProps {
    question: Question;
    index: number;
}

const ReviewQuestion: React.FunctionComponent<ReviewQuestionProps> = ({ question, index }) => {
    return (
        <div className="px-5 py-5 space-y-2 text-base bg-white rounded-md">
            <div className="flex justify-between">
                <h1 className="font-bold">Question {index + 1}</h1>
            </div>
            <div className="flex flex-col space-y-1">
                <p className="font-semibold">{question.content}</p>
                <fieldset className="space-y-5">
                    <legend className="sr-only">Notifications</legend>
                    {question.answers.map((item) => (
                        <div key={item.id} className="relative flex items-start">
                            <div className="ml-3 text-sm">
                                <label htmlFor={item.id} className="font-medium text-black cursor-pointer">
                                    {item.answerContent}
                                </label>
                            </div>
                        </div>
                    ))}
                </fieldset>
            </div>
        </div>
    );
};

export default ReviewQuestion;
