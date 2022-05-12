import * as React from 'react';
import { AuthLayout } from '../../src/packages/auth/components';
import { Register } from '../../src/packages/auth/containers/register';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <AuthLayout>
            <Register />
        </AuthLayout>
    );
};

export default RegisterPage;
