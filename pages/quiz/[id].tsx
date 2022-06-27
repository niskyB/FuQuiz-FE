import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { DoQuiz } from '../../src/packages/quiz';
import { DoQuizType } from '../../src/packages/quiz/containers/doQuiz/interface';
import { StoreLayout } from '../../src/packages/store';

interface DoQuizPageProps {
    id: string;
}

const DoQuizPage: NextPage<DoQuizPageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <DoQuiz id={id} mode={DoQuizType.TEST} />
        </StoreLayout>
    );
};

DoQuizPage.getInitialProps = async (ctx: NextPageContext): Promise<DoQuizPageProps> => {
    let props = { id: ctx.query?.id || '' };

    return props as DoQuizPageProps;
};

export default DoQuizPage;
