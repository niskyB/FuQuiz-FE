import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { QuizPractice } from '../../../src/packages/practice/containers/quizPractice';
import { StoreLayout } from '../../../src/packages/store';

interface PracticeQuizPageProps {
    id: string;
}

const PracticeQuizPage: NextPage<PracticeQuizPageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <QuizPractice id={id} />
        </StoreLayout>
    );
};

PracticeQuizPage.getInitialProps = async (ctx: NextPageContext): Promise<PracticeQuizPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as PracticeQuizPageProps;
};

export default PracticeQuizPage;
