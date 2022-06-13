import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { DoQuiz } from '../../../src/packages/quiz';
import { StoreLayout } from '../../../src/packages/store';

interface SimulationQuizPageProps {
    id: string;
}

const SimulationQuizPage: NextPage<SimulationQuizPageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <DoQuiz id={id} />
        </StoreLayout>
    );
};

SimulationQuizPage.getInitialProps = async (ctx: NextPageContext): Promise<SimulationQuizPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as SimulationQuizPageProps;
};

export default SimulationQuizPage;
