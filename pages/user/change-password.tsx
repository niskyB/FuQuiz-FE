import * as React from 'react';
import { AllRole } from '../../src/core/models/user';

//---- components
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { AuthLayout } from '../../src/packages/auth/components';
import { ChangePassword } from '../../src/packages/user/containers/changePassword';

interface PasswordPageProps {}

const PasswordPage: React.FunctionComponent<PasswordPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <AuthLayout>
                <ChangePassword />
            </AuthLayout>
        </RouterProtectionWrapper>
    );
};

export default PasswordPage;
