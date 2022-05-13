import * as React from 'react';
import { AuthLayout } from '../../../src/packages/auth/components';
import { RouterUnAuthProtectionWrapper } from '../../../src/core/components/routerProtection';
import { Login } from '../../../src/packages/auth';
import { StoreLayout } from '../../../src/packages/store/components';
import { ForgotPassword } from '../../../src/packages/user/containers/forgotPassword';

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <AuthLayout>
                <StoreLayout>
                    <ForgotPassword />
                </StoreLayout>
            </AuthLayout>
        </RouterUnAuthProtectionWrapper>
    );
};
export default ForgotPasswordPage;
