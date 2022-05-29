import React from 'react';

import { HintQuestion } from '../containers/reviewPractice/interface';

interface HintAnswerProps {
    isShow: boolean;
    data: HintQuestion;
}

const HintAnswer: React.FunctionComponent<HintAnswerProps> = ({ isShow, data }) => {
    if (isShow) {
        return (
            <div className="flex flex-col mt-5 space-y-5">
                <div className="flex flex-col p-5 space-y-3 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Peek at Answer</h1>
                    <p>Explain: {data.content}</p>
                    <p>Domain: {data.domain}</p>
                    <p>Source: {data.source}</p>
                </div>
            </div>
        );
    }
    return <></>;
};

export default HintAnswer;
