import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { AllRole } from '../../src/core/models/user';
import { UpdateUser } from '../../src/packages/user';
import { StoreLayout } from '../../src/packages/store/components';

interface UserMePageProps {}

const UserMePage: React.FC<UserMePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <UserLayout>
                <StoreLayout>
                    <UpdateUser />
                </StoreLayout>
            </UserLayout>
        </RouterProtectionWrapper>
    );
};

export default UserMePage;
