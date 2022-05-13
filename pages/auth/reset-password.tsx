import * as React from 'react';
import { AuthLayout } from '../../src/packages/auth/components';
import ResetPassword from '../../src/packages/auth/containers/resetPassword';

interface ResetPasswordPageProps {}

const ResetPasswordPage: React.FunctionComponent<ResetPasswordPageProps> = () => {
    return (
        <AuthLayout>
            <ResetPassword />
        </AuthLayout>
    );
};

export default ResetPasswordPage;
