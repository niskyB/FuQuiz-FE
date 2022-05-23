import * as React from 'react';
import { Register } from '../../src/packages/auth';
import { StoreLayout } from '../../src/packages/store';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <StoreLayout>
            <Register />
        </StoreLayout>
    );
};

export default RegisterPage;
