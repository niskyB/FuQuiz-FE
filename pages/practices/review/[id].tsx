import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { ReviewPractice } from '../../../src/packages/practices/containers/reviewPractice';
import { StoreLayout } from '../../../src/packages/store';

interface ReviewPracticePageProps {
    id: string;
}

const ReviewPracticePage: NextPage<ReviewPracticePageProps> = ({ id }) => {
    return (
        <StoreLayout>
            <ReviewPractice id={id} />
        </StoreLayout>
    );
};

ReviewPracticePage.getInitialProps = async (ctx: NextPageContext) => {
    let props = { id: ctx.query?.id || '' };
    return props as ReviewPracticePageProps;
};

export default ReviewPracticePage;
