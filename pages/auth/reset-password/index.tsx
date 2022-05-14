import * as React from 'react';
import { AuthLayout } from '../../../src/packages/auth/components';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { StoreLayout } from '../../../src/packages/store/components';
import SendResetPassword from '../../../src/packages/auth/containers/resetPassword';

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <AuthLayout>
                <StoreLayout>
                    <SendResetPassword />
                </StoreLayout>
            </AuthLayout>
        </RouterUnAuthProtectionWrapper>
    );
};
export default ForgotPasswordPage;
