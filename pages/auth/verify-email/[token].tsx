import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { VerifyEmail } from '../../../src/packages/auth/containers/verifyEmail';
import { StoreLayout } from '../../../src/packages/store';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';

interface VerifyEmailPageProps {
    token: string;
}

const VerifyEmailPage: NextPage<VerifyEmailPageProps> = ({ token }) => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <VerifyEmail token={token} />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

VerifyEmailPage.getInitialProps = async (ctx: NextPageContext): Promise<VerifyEmailPageProps> => {
    let props = { token: ctx.query?.token || '' };

    return props as VerifyEmailPageProps;
};

export default VerifyEmailPage;
