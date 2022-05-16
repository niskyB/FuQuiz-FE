import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { StoreLayout } from '../../../src/packages/store/components';
import SendResetPassword from '../../../src/packages/auth/containers/resetPassword';

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <SendResetPassword />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};
export default ForgotPasswordPage;
