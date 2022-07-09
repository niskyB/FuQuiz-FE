import { NextPage, NextPageContext } from 'next';
import React from 'react';
import { RouterProtectionWrapper } from '../../../src/core/components/routerProtection';
import { UserRole } from '../../../src/core/models/role';
import { ReviewPractice } from '../../../src/packages/practices/containers/reviewPractice';
import { StoreLayout } from '../../../src/packages/store';

interface ReviewPracticePageProps {
    id: string;
}

const ReviewPracticePage: NextPage<ReviewPracticePageProps> = ({ id }) => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.CUSTOMER]}>
            <StoreLayout>
                <ReviewPractice id={id} />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

ReviewPracticePage.getInitialProps = async (ctx: NextPageContext) => {
    let props = { id: ctx.query?.id || '' };
    return props as ReviewPracticePageProps;
};

export default ReviewPracticePage;
