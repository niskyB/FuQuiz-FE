import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../src/core/components/routerProtection';
import { Login } from '../../src/packages/auth';
import { StoreLayout } from '../../src/packages/store/components';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <Login />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

export default LoginPage;
