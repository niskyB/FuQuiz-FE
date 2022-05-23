import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { ResetPasswordSuccess } from '../../../src/packages/auth/containers/resetPasswordSuccess';
import { StoreLayout } from '../../../src/packages/store';

interface ResetPasswordSuccessPageProps {}

const ResetPasswordSuccessPage: React.FunctionComponent<ResetPasswordSuccessPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <ResetPasswordSuccess />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

export default ResetPasswordSuccessPage;
