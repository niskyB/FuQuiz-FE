import * as React from 'react';
import { Register } from '../../src/packages/auth';
import { StoreLayout } from '../../src/packages/store';
import { RouterUnAuthProtectionWrapper } from '../../src/core/components/routerProtection';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <RouterUnAuthProtectionWrapper>
            <StoreLayout>
                <Register />
            </StoreLayout>
        </RouterUnAuthProtectionWrapper>
    );
};

export default RegisterPage;
