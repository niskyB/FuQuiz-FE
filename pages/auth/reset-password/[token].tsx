import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import ResetPassword from '../../../src/packages/auth/containers/resetPassword/resetPassword';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { StoreLayout } from '../../../src/packages/store';

interface ResetPasswordPageProps {
    token: string;
}

const ResetPasswordPage: NextPage<ResetPasswordPageProps> = ({ token }) => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <ResetPassword token={token} />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

ResetPasswordPage.getInitialProps = async (ctx: NextPageContext): Promise<ResetPasswordPageProps> => {
    let props = { token: ctx.query?.token || '' };

    return props as ResetPasswordPageProps;
};

export default ResetPasswordPage;
