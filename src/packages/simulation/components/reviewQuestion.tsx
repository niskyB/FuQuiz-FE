import * as React from 'react';
import { Question } from '../../../core/models/question';

interface ReviewQuestionProps {
    question: Question;
    index: number;
}

export const ReviewQuestion: React.FunctionComponent<ReviewQuestionProps> = ({ question, index }) => {
    const convertNumberToChar = (num: number) => {
        return num
            .toString() // convert number to string
            .split('') // convert string to array of characters
            .map(Number) // parse characters as numbers
            .map((n) => (n || 10) + 64) // convert to char code, correcting for J
            .map((c) => String.fromCharCode(c)) // convert char codes to strings
            .join(''); // join values together
    };

    return (
        <div className="px-5 py-5 space-y-2 text-base bg-white rounded-md">
            <div className="flex justify-between">
                <h1 className="font-bold">Question {index + 1}</h1>
            </div>
            <div className="flex flex-col space-y-1">
                <p className="font-semibold">{question.content}</p>
                <fieldset className="space-y-5">
                    <legend className="sr-only">Notifications</legend>
                    {question.answers.map((answer, answerIndex) => (
                        <div key={answer.id} className="relative flex items-start">
                            <div className="ml-3 text-sm">
                                <label htmlFor={answer.id} className="font-medium text-black cursor-pointer">
                                    {`${convertNumberToChar(answerIndex + 1)}. `}
                                    {answer.detail}
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
