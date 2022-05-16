import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import VerifyEmail from '../../../src/packages/auth/containers/verifyEmail';
import { StoreLayout } from '../../../src/packages/store/components';

interface ResetPasswordPageProps {
    token: string;
}

const ResetPasswordPage: NextPage<ResetPasswordPageProps> = ({ token }) => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <VerifyEmail token={token} />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

ResetPasswordPage.getInitialProps = async (ctx: NextPageContext): Promise<ResetPasswordPageProps> => {
    let props = { token: ctx.query?.token || '' };

    return props as ResetPasswordPageProps;
};

export default ResetPasswordPage;
