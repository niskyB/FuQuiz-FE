import * as React from 'react';
import { Register } from '../../src/packages/auth';
import { AuthLayout } from '../../src/packages/auth/components';
import { StoreLayout } from '../../src/packages/store/components';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <AuthLayout>
            <StoreLayout>
                <Register />
            </StoreLayout>
        </AuthLayout>
    );
};

export default RegisterPage;
