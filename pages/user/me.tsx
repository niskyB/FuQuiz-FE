import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { AllRole } from '../../src/core/models/user';
import { UpdateUser } from '../../src/packages/user';

interface UserMePageProps {}

const UserMePage: React.FC<UserMePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={AllRole}>
            <UserLayout>
                <UpdateUser />
            </UserLayout>
        </RouterProtectionWrapper>
    );
};

export default UserMePage;
