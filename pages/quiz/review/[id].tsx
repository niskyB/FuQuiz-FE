import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { ReviewPractice } from '../../../src/packages/practices/containers/reviewPractice';
import { StoreLayout } from '../../../src/packages/store';

interface ReviewQuizPageProps {
    id: string;
}

const ReviewQuizPage: NextPage<ReviewQuizPageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <ReviewPractice id={id} />
        </StoreLayout>
    );
};

ReviewQuizPage.getInitialProps = async (ctx: NextPageContext) => {
    let props = { id: ctx.query?.id || '' };
    return props as ReviewQuizPageProps;
};

export default ReviewQuizPage;
