import * as React from 'react';
import { AllRole } from '../../src/core/models/user';

//---- components
import { StoreLayout } from '../../src/packages/store';
import { ChangePassword } from '../../src/packages/user/containers/changePassword';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';

interface PasswordPageProps {}

const PasswordPage: React.FunctionComponent<PasswordPageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <ChangePassword />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default PasswordPage;
