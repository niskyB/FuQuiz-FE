import * as React from 'react';
import { AuthLayout } from '../../src/packages/auth/components';
import { RouterUnAuthProtectionWrapper } from '../../src/core/components/routerProtection';
import { Login } from '../../src/packages/auth';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <AuthLayout>
                <Login />
            </AuthLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

export default LoginPage;
