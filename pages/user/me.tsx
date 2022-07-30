import * as React from 'react';
import { AllRole } from '../../src/core/models/user';
import { StoreLayout } from '../../src/packages/store';
import { UpdateUser } from '../../src/packages/user';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';

interface UserMePageProps {}

const UserMePage: React.FC<UserMePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <StoreLayout>
                <UpdateUser />
            </StoreLayout>
        </RouterProtectionWrapper>
    );
};

export default UserMePage;
