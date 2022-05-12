import * as React from 'react';
import { UserLayout } from '../../src/packages/user/components';
import { RouterProtectionWrapper } from '../../src/core/components/routerProtection';
import { UserMe } from '../../src/packages/user/containers/me';
import { UserRole } from '../../src/core/models/user';

interface UserMePageProps {}

const UserMePage: React.FC<UserMePageProps> = () => {
    return (
        <RouterProtectionWrapper acceptRoles={[UserRole.USER]}>
            <UserLayout>
                <UserMe />
            </UserLayout>
        </RouterProtectionWrapper>
    );
};

export default UserMePage;
