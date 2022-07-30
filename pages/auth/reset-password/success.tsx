import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { StoreLayout } from '../../../src/packages/store';
import { ResetPasswordSuccess } from '../../../src/packages/auth/containers/resetPasswordSuccess';

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
