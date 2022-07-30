import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { StoreLayout } from '../../../src/packages/store';
import { QuizPractice } from '../../../src/packages/practice/containers/quizPractice';

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
