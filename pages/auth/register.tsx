import * as React from 'react';
import { RouterUnAuthProtectionWrapper } from '../../src/core/components/routerProtection';
import { Register } from '../../src/packages/auth';
import { StoreLayout } from '../../src/packages/store';

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
